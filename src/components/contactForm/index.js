import React, { useState, useEffect, Fragment } from "react"
import styled, { withTheme, css } from "styled-components"
import fetchRecaptchaToken from "@utils/recaptcha"
import getHost from "@utils/getHost"
import axios from "axios"

// http with server
const url = `${getHost()}/api/contact`

// user message
const messageDuration = 8000;
const defaultSuccessMessage = "Thank you for your submission. We've sent you a follow up email."
const defaultResponse = 'Contact not avaiable at this time. Please reach out on Facebook'
const defaultInvalidUserMessage = 'We apologize for the inconvenience, but your account was flagged as spam. If you are not a bot please reach out on Facebook'
const serverError = {
  data: {
    code: 0,
    message: defaultResponse,
  }
}

const InputWrapperStyles = css`
  width: 100%;
`
const InputWrapperTop = styled.div`
  ${InputWrapperStyles}
  margin-bottom: 20px;
`
const InputWrapper = styled.div`
  ${InputWrapperStyles}
  margin: 20px 0px;
`
const Label = styled.label`
  color: #000;
  display: block;
`
const Format = styled.span`
  color: #000;
  font-size: 12px;
`
const InputStyles = css`
  display: block;
  padding: 10px;
  border-radius: 3px;
  width: ${({ theme }) => theme.viewport === 'large' ? '90%' : '100%'};
  border: 0px;
`
const Input = styled.input`
  ${InputStyles}
`
const TextArea = styled.textarea`
  ${InputStyles}
  min-height: 300px;
`
const SubmitButtonStyles = css`
  background-color: #e68bbe;
  border: 3px solid #fff;
  padding: 10px 0px;
`
const SubmitButton = styled.input`
  ${InputStyles}
  ${SubmitButtonStyles}
`
const UserMessage = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 25px 0px;
  background-color: #e68bbe;
  border-bottom: 5px solid #fff;
  transition-timing-function: ease-out;
  transition: 0.25s;
  transform: translateY(-100%);
  ${props => props.toggle && css`
    transition-timing-function: ease-in;
    transition: 0.2s;
    transform: translateY(0%);
  `}
`

const defaultState = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

const ContactForm = props => {
  const [contact, setContact] = useState(defaultState)
  const [userMessage, setUserMessage] = useState(defaultResponse)
  const [shouldShowUserMessage, setShowUserMessage] = useState(false)

  const handleRequest = async requestData => {
    let response = defaultResponse;
    let token = null;

    try {
      token = await fetchRecaptchaToken()
    } catch (tokenErr) {
      console.log('error fetching recaptcha token: ', tokenErr)
    }

    try {
      const res = await axios({
        method: "POST",
        url,
        data: {
          ...requestData,
          token,
        }
      })
      response = res.data
    } catch (err) {
      console.log('err: ', err);
      response = err.message === 'Network Error' ? serverError : err.response;
    }
    return response && response.data
  }

  const onInputChange = e => {
    const { target } = e
    const newValue = { [target.name]: target.value }
    setContact({ ...contact, ...newValue })
  }

  const validateContact = ({ name, phone, email, message }) => {
    return {
      name,
      phone: phone.length === 0 ? undefined : phone,
      email,
      message,
    }
  }

  const setShowMessageTimer = () => {
    setTimeout(() => {
      setShowUserMessage(false);
    }, messageDuration);
  }

  const showUserMessage = () => {
    setShowUserMessage(true)
    setShowMessageTimer()
  }

  const getUserMessage = response => {
    const { code, message } = response
    const messages = {
      3: message,
      10: defaultInvalidUserMessage,
      11: defaultInvalidUserMessage,
      12: defaultInvalidUserMessage,
      13: defaultInvalidUserMessage,
      14: defaultSuccessMessage,
    }
    return messages[code] || defaultResponse
  }

  const handleContactForm = async e => {
    let response;
    e.preventDefault()
    
    const validContact = validateContact(contact);
    try {
      response = await handleRequest(validContact);
    } catch(err) {
      console.log('err in handle request: ', err);
    }
    
    const message = getUserMessage(response)
    
    setUserMessage(message);
    showUserMessage();
  }
  
  return (
    <Fragment>
      <UserMessage toggle={shouldShowUserMessage}>{userMessage}</UserMessage>
      <form>
        <InputWrapperTop>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Miss Dawn"
            name="name"
            type="text"
            onChange={onInputChange}
          ></Input>
        </InputWrapperTop>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="example@example.com"
            name="email"
            type="email"
            onChange={onInputChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="phone">Phone <Format>(Optional)</Format></Label>
          <Input
            placeholder="6095611414"
            name="phone"
            type="phone"
            onChange={onInputChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="message">Message</Label>
          <TextArea
            placeholder="What would you like to say?"
            name="message"
            onChange={onInputChange}
          ></TextArea>
        </InputWrapper>
        <InputWrapper>
          <SubmitButton name="submit" type="submit" onClick={handleContactForm} />
        </InputWrapper>
      </form>
    </Fragment>
  )
}

export default withTheme(ContactForm);
