import React from "react"
import styled from "styled-components"
import { Link } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"
import {
  StyledButtonMediumBold,
  StyledTextField,
  StyledForm,
  StyledFormTitle,
} from "../../../../Common"
import * as Joi from "joi"

interface ILoginFormInput {
  email: String
  password: String
}

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
})

interface Props {
  handleClickForgotPassword: () => void
  handleClickSignUp: () => void
}

const StyledSignUpButton = styled(StyledButtonMediumBold)`
  && {
    background-color: #2cbd60;
    color: white;
  }
`

const StyledLoginButtonButton = styled(StyledButtonMediumBold)``

const LoginForm = ({ handleClickForgotPassword, handleClickSignUp }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({ resolver: joiResolver(loginSchema) })

  const onSubmit = (data: ILoginFormInput) => console.log(data)
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormTitle>Login</StyledFormTitle>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledTextField
              size="small"
              error={errors?.email ? true : false}
              label="Email"
              helperText={(errors as any)?.email?.message}
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledTextField
              size="small"
              error={errors?.password ? true : false}
              label="Password"
              helperText={(errors as any)?.password?.message}
              variant="outlined"
              type="password"
              {...field}
            />
          )}
        />

        <Link href="#" onClick={handleClickForgotPassword}>
          Forgot Password ?
        </Link>

        <StyledLoginButtonButton variant="contained" color="primary" type="submit">
          Log In
        </StyledLoginButtonButton>
        <StyledSignUpButton variant="contained" onClick={handleClickSignUp}>
          Create a account
        </StyledSignUpButton>
      </StyledForm>
    </>
  )
}

export default LoginForm
