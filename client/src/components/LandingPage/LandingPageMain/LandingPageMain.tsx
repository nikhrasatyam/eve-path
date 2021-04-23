import React from "react"
import styled from "styled-components"
import FormContainer from "./FormContainer/FormContainer"
import { useTranslation } from "react-i18next"

const Container = styled.main`
  display: flex;
  flex-flow: column wrap;
  flex: 1;
  background-color: rgb(234, 234, 234);
`
const Header = styled.header`
  padding: 25px 20px 25px 20px;
  p {
    font-size: 20px;
    font-family: "Architects Daughter", cursive;
  }
`
const Title = styled.div`
  font-family: "Varela Round", sans-serif;
  font-size: 30px;
  color: rgb(65, 70, 96);
`
const Content = styled.section`
  flex-grow: 1;
`

const Footer = styled.footer`
  p {
    font-family: "Varela Round", sans-serif;
    font-size: 15px;
    padding-bottom: 10px;
    color: rgb(65, 70, 96);
  }
`
const LandingPageMain = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Container>
      <Header>
        <Title>{t("phrases:Welcome to Evepath")}</Title>
        <p>{t("phrases:We help you manage and organise your events")} </p>
      </Header>
      <Content>
        <FormContainer />
      </Content>
      <Footer>
        <p>{t("phrases:2021 Copy rights protected")}</p>
      </Footer>
    </Container>
  )
}
export default LandingPageMain
