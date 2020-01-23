import React, { useState, Fragment } from "react"
import styled, { css } from "styled-components"
import { HeroOverlay } from "@styles/HeroContainer"
import fetchRecaptchaToken from "@utils/recaptcha"
import getHost from "@utils/getHost"
import axios from "axios"

const host = getHost();
const loadingImg = "https://storage.googleapis.com/dance-magic-images/dancer.gif";

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
  width: 90%;
  border: 0px;

  @media (max-width: 700px) {
    width: 100%;
  }
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
  padding: 35px 20px;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
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
const LoadingGif = styled.img`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`

const defaultState = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

const ContactForm = props => {
  const [contact, setContact] = useState(defaultState)
  const [isLoading, setIsLoading] = useState(false)
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
        method: 'POST',
        url: '/api/contact',
        baseURL: host,
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
    setIsLoading(false)
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
    setIsLoading(true)
    
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
      {isLoading &&
        <HeroOverlay>
          <LoadingGif src={loadingImg}/>
        </HeroOverlay>
      }
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

export default ContactForm;
