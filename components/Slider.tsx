import styled from "styled-components";
import ServicesRow from "./ServicesRow";
import { media } from "@/utils/media";

export default function Slider() {
  const ImageWrapper = styled.div`
    background: url("/stock-image-1.webp");
    background-size: cover;
    background-position: unset;
    ${media("<=desktop")} {
      background-size: cover;
      background-repeat: no-repeat;
    }
  `;

  const Container = styled.div`
    background: rgb(10, 49, 97, 0.8);
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0rem;
    height: 300px;
    ${media("<tablet")} {
      height: 200px;
    }
  `;

  const Title = styled.div`
    font-weight: bold;
    display: inline-block;
    text-align: center;
    align-self: center;
    max-width: 14em;
    position: relative;
    font-size: 6rem;
    margin-bottom: 2rem;
    margin-right: 5rem;
    margin-left: 5rem;
    margin-top: 3rem;
    color: white;

    /* When screen is less or equal to desktop */
    ${media("<largeDesktop")} {
      font-size: 6rem;
    }
    /* when screen is less than tablet */
    ${media("<tablet")} {
      font-size: 3rem;
      margin-left: 2rem;
      margin-right: 2rem;
      align-self: center;
      justify-self: center;
    }
  `;
  const SubTitle = styled.div`
    display: inline-block;
    text-align: center;
    align-self: center;
    position: relative;
    margin-right: 5rem;
    margin-left: 5rem;
    color: white;

    /* When screen is less or equal to desktop */
    ${media(">=desktop")} {
      font-size: 3.3rem;
    }
    /* when screen is less than tablet */
    ${media("<tablet")} {
      font-size: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
      align-self: center;
      justify-self: center;
    }
  `;

  return (
    <>
      <ImageWrapper>
        <Container>
          <Title>Oscar's Lock and Key Services</Title>
          <SubTitle>Your safety is our priority</SubTitle>
        </Container>
      </ImageWrapper>
      {/* <ServicesWrapper>

      </ServicesWrapper> */}
    </>
  );
}
