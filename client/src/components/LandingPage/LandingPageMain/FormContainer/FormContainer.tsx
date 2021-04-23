import React from "react"
import styled from "styled-components"
import LoginForm from "./LoginForm/LoginForm"
import SignUpForm from "./SignUpForm/SignUpForm"
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm"

const Container = styled.div`
  margin: 0px 20px;
  border-radius: 10px;
  position: relative;
  padding: 25px 20px 25px 20px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.97);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.97);
`

const FORM_TYPES = {
  LOGIN: "login",
  SIGNUP: "signup",
  FORGOT_PASSWORD: "forgot_password",
}

const FormContainer = () => {
  const [formType, setFormType] = React.useState<String>(FORM_TYPES.LOGIN)
  return (
    <Container>
      {formType === FORM_TYPES.LOGIN && (
        <LoginForm
          handleClickForgotPassword={() => setFormType(FORM_TYPES.FORGOT_PASSWORD)}
          handleClickSignUp={() => setFormType(FORM_TYPES.SIGNUP)}
        />
      )}
      {formType === FORM_TYPES.SIGNUP && (
        <SignUpForm handleClickCancel={() => setFormType(FORM_TYPES.LOGIN)} />
      )}
      {formType === FORM_TYPES.FORGOT_PASSWORD && (
        <ForgotPasswordForm
          handleClickCancel={() => setFormType(FORM_TYPES.LOGIN)}
        />
      )}
    </Container>
  )
}

export default FormContainer
