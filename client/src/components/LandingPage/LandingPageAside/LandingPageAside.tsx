import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import weddingImage from "../../../assets/images/wedding.jpg"
import birthdayImage from "../../../assets/images/birthday.jpg"
import partyImage from "../../../assets/images/party.jpg"
import funeralImage from "../../../assets/images/funeral.jpg"
import engagementImage from "../../../assets/images/engagement.jpg"
import festivalImage from "../../../assets/images/festival.jpg"
import babyShower from "../../../assets/images/babyshower.jpg"

const Container = styled.aside`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  flex: 3;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  figure {
    margin: 0;
  }
`
const FigurePartyImage = styled.figure`
  grid-column: 1;
  grid-row: 1;
  position: relative;
`
const FigureFuneralImage = styled.figure`
  grid-column: 3;
  grid-row: 1;
  position: relative;
`
const FigureWeddingImage = styled.figure`
  grid-row: 1/3;
  grid-column: 2;
  position: relative;
`
const FigureFestivalImage = styled.figure`
  grid-row: 2/4;
  grid-column: 3;
  position: relative;
`
const FigureEngagementImage = styled.figure`
  grid-column: 1;
  grid-row: 2/3;
  position: relative;
`
const FigureBirthdayImage = styled.figure`
  grid-column: 2;
  grid-row: 3;
  position: relative;
`
const FigureBabyShowerImage = styled.figure`
  grid-column: 1;
  grid-row: 3;
  position: relative;
`
const Label = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  background-color: #282c34;
  bottom: 0;
  opacity: 0.7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const LandingPageAside = (): JSX.Element => {
  console.log("Grid load")
  const { t } = useTranslation()
  return (
    <Container>
      <FigurePartyImage>
        <img alt="" src={partyImage} />
        <Label>{t("Get Together")}</Label>
      </FigurePartyImage>
      <FigureFuneralImage>
        <img alt="" src={funeralImage} />
        <Label>{t("Funeral")}</Label>
      </FigureFuneralImage>
      <FigureWeddingImage>
        <img alt="" src={weddingImage} />
        <Label>{t("Wedding")}</Label>
      </FigureWeddingImage>
      <FigureFestivalImage>
        <img alt="" src={festivalImage} />
        <Label>{t("Festivals")}</Label>
      </FigureFestivalImage>
      <FigureEngagementImage>
        <img alt="" src={engagementImage} />
        <Label>{t("Engagement")}</Label>
      </FigureEngagementImage>
      <FigureBirthdayImage>
        <img alt="" src={birthdayImage} />
        <Label>{t("Birthday")}</Label>
      </FigureBirthdayImage>
      <FigureBabyShowerImage>
        <img alt="" src={babyShower} />
        <Label>{t("Baby Shower")}</Label>
      </FigureBabyShowerImage>
    </Container>
  )
}
export default LandingPageAside
