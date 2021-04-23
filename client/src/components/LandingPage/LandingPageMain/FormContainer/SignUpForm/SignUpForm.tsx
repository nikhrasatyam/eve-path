import React from "react"
import {
  StyledButtonMediumBold,
  StyledTextField,
  StyledForm,
  StyledFormTitle,
} from "../../../../Common"
import { useForm, Controller } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"
import * as Joi from "joi"

interface FormInput {
  email: String
  firstName: String
  lastName: String
  password: String
  passwordConfirmation: String
}

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().min(7).max(20).required(),
  passwordConfirmation: Joi.any().valid(Joi.ref("password")).required(),
})

interface Props {
  handleClickCancel: () => void
}

const SignUpForm = ({ handleClickCancel }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({ resolver: joiResolver(schema) })

  const onSubmit = (data: FormInput) => console.log(data)
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormTitle>Create an account</StyledFormTitle>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <StyledTextField
              size="small"
              error={errors?.firstName ? true : false}
              label="First Name"
              helperText={(errors as any)?.firstName?.message}
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <StyledTextField
              size="small"
              error={errors?.lastName ? true : false}
              label="Last Name"
              helperText={(errors as any)?.lastName?.message}
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
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
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field }) => (
            <StyledTextField
              size="small"
              error={errors?.passwordConfirmation ? true : false}
              label="Confirm Password"
              helperText={(errors as any)?.passwordConfirmation?.message}
              variant="outlined"
              type="password"
              {...field}
            />
          )}
        />
        <StyledButtonMediumBold variant="contained" color="primary" type="submit">
          Create
        </StyledButtonMediumBold>
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

export default SignUpForm
