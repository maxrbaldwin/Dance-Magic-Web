import React, { useState, useEffect, Fragment } from "react"
import styled, { withTheme, css } from "styled-components"
import isVerified from "@utils/recaptcha"
import getHost from "@utils/getHost"
import axios from "axios"
// user message
const messageDuration = 8000;
const defaultSuccessMessage = "Thank you for your submission. We've sent you a follow up email."
const defaultInvalidUserMessage = 'We apologize for the inconvenience, but your account was flagged as spam. If you are not a bot please reach out on Facebook'
// http with server
const url = `${getHost()}/api/contact`
const defaultResponse = {
  data: {
    error: {
      message: 'Contact not avaiable at this time. Please reach out on Facebook'
    }
  }
}

const defaultState = {
  name: "",
  email: "",
  phone: "",
  message: "",
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

const ContactForm = props => {
  const [contact, setContact] = useState(defaultState)
  const [userMessage, setUserMessage] = useState(defaultResponse.data.error.message)
  const [shouldShowUserMessage, setShowUserMessage] = useState(false)
  const [isVerifiedUser, setIsVerifiedUser ] = useState(true)
  // immediatley
  useEffect(() => {
    async function fetchVerifiedUser() {
      try {
        const isOk = await isVerified()
        setIsVerifiedUser(isOk)
      } catch (err) {
        console.log('error verifying user: ', err);
      }
    }
    fetchVerifiedUser()
  }, [])

  const handleRequest = async data => {
    let response = defaultResponse;

    try {
      const res = await axios({
        method: "POST",
        url,
        data,
      })
      response = res.data
    } catch (err) {
      response = err.message === 'Network Error' ? defaultResponse : err.response;
    }

    return response
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


  const handleInvalidUser = e => {
    e.preventDefault();

    setUserMessage(defaultInvalidUserMessage);
    showUserMessage();
  }

  const handleValidUser = async e => {
    let response;
    e.preventDefault()
    
    const validContact = validateContact(contact);
    try {
      response = await handleRequest(validContact);
    } catch(err) {
      console.log('err in handle request: ', err);
    }
    const message = response.data && response.data.error ? response.data.error.message : defaultSuccessMessage
    
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
          <SubmitButton name="submit" type="submit" onClick={isVerifiedUser ? handleValidUser : handleInvalidUser} />
        </InputWrapper>
      </form>
    </Fragment>
  )
}

export default withTheme(ContactForm);
