import React from "react"
import styled from "styled-components"
import LandingPageAside from "./LandingPageAside/LandingPageAside"
import LandingPageMain from "./LandingPageMain/LandingPageMain"

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
`

const LandingPage = (): JSX.Element => {
  return (
    <Container>
      <LandingPageMain />
      <LandingPageAside />
    </Container>
  )
}

export default LandingPage
