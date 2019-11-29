import React, { useState, Fragment } from "react"
import styled, { withTheme, css } from "styled-components"
import axios from "axios"

const messageDuration = 5000;
const defaultSuccessMessage = "Thank you for your submission. We've sent you a follow up email."
const url = "http://localhost:9000/api/contact"
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
const SubmitButton = styled.input`
  ${InputStyles}
  background-color: #e68bbe;
  border: 3px solid #fff;
  padding: 10px 0px;
`
const UserMessage = styled.div`
  position: absolute;
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
  const [contact, setContact] = useState(defaultState);
  const [userMessage, setUserMessage] = useState(defaultResponse.data.error.message);
  const [showUserMessage, setShowUserMessage] = useState(false);

  const handleRequest = async data => {
    let response = defaultResponse;

    try {
      await axios({
        method: "POST",
        url,
        data,
      })
        .then(res => {
          response = res
        })
        .catch(err => {
          response = err.message === 'Network Error' ? defaultResponse : err.response;
        })
    } catch (err) {
      console.log('err: ', err);
    }

    return response
  }

  const onChange = e => {
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
      console.log('time!')
      setShowUserMessage(false);
    }, messageDuration);
  }

  const onClick = async e => {
    e.preventDefault()
    
    const validContact = validateContact(contact);
    const { data } = await handleRequest(validContact);

    if (data.error) {
      setUserMessage(data.error.message);
    } else {
      setUserMessage(defaultSuccessMessage);
    }
    
    setShowUserMessage(true);
    setShowMessageTimer();
  }
  
  return (
    <Fragment>
      <UserMessage toggle={showUserMessage}>{userMessage}</UserMessage>
      <form>
        <InputWrapperTop>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Miss Dawn"
            name="name"
            type="text"
            onChange={onChange}
          ></Input>
        </InputWrapperTop>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="example@example.com"
            name="email"
            type="email"
            onChange={onChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="phone">Phone <Format>(Optional)</Format></Label>
          <Input
            placeholder="6095611414"
            name="phone"
            type="phone"
            onChange={onChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="message">Message</Label>
          <TextArea
            placeholder="What would you like to say?"
            name="message"
            onChange={onChange}
          ></TextArea>
        </InputWrapper>
        <InputWrapper>
          <SubmitButton name="submit" type="submit" onClick={onClick}></SubmitButton>
        </InputWrapper>
      </form>
    </Fragment>
  )
}

export default withTheme(ContactForm);
