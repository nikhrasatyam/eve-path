import React from "react"
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"
import {
  StyledButtonMediumBold,
  StyledTextField,
  StyledForm,
  StyledFormTitle,
} from "../../../../Common"
import * as Joi from "joi"

interface IFormInput {
  email: String
}

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
})

interface Props {
  handleClickCancel: () => void
}

const StyledLoginButtonButton = styled(StyledButtonMediumBold)``

const ForgotPasswordForm = ({ handleClickCancel }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: joiResolver(schema) })

  const onSubmit = (data: IFormInput) => console.log(data)
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormTitle>Forgot Password</StyledFormTitle>
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

        <StyledLoginButtonButton variant="contained" color="primary" type="submit">
          Send Password Link
        </StyledLoginButtonButton>
        <StyledButtonMediumBold
          variant="contained"
          color="default"
          onClick={handleClickCancel}
        >
          Cancel
        </StyledButtonMediumBold>
      </StyledForm>
    </>
  )
}

export default ForgotPasswordForm
