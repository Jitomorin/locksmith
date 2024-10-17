import { media } from "@/utils/media";
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Title>About Us</Title>
        {/* <SubTitle>
          At Oscar's Locksmith, we provide fast, reliable, and professional
          locksmith services to keep you safe and secure.
        </SubTitle> */}
        <Row>
          {/* <img className="image" src="/institute-certified-locksmiths.webp" /> */}
          <Description>
            Oscar’s Lock & Key Services has unique security demands based on its
            location,industry, size and operations. Partnering with Oscar’s Lock
            & Key Services ensures you receive personalized security solutions
            tailored to your specific needs.With the support of qualified
            locksmiths, you can make right decisions and maximize the
            effectiveness of your security investments.
          </Description>
        </Row>
        <ReversedRow>
          {/* <img className="image" src="/burglar-fire-alarm-association.webp" /> */}

          <Description>
            Protecting your property or business from threats is a top priority
            for everybody. Hiring our experienced locksmiths is a critical step
            in achieving that goal. Our team can provide a comprehensive range
            of services, from lock installations and rekeying to master key
            system implementation and emergency lockout assistance.
          </Description>
        </ReversedRow>
      </Container>
      {/* <PaymentContainer>
        <img src="/header-payment.webp" />
      </PaymentContainer> */}
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  padding: 4rem 0rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  ${media("<=desktop")} {
    flex-direction: column;
    padding: 4rem 2rem;
  }
  ${media("<desktop")} {
    padding: 4rem 2rem;
  }
  /* align-items: center; */
`;
const Container = styled.div`
  width: 50%;
  ${media("<=desktop")} {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 52px;
  text-align: left;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  ${media("<=tablet")} {
    font-size: 28px;
  }
  ${media("<tablet")} {
    text-align: center;
  }
  ${media("<=desktop")} {
    text-align: center;
  }
`;
const PaymentContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  align-items: center;
  border-left: solid 1px #83838390;
  img {
    margin-bottom: auto;
  }
  ${media("<largeDesktop")} {
    border-left: none;
  }
`;
const SubTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin: 0 10rem;
  color: #2c2c2c;
  margin-bottom: 3rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  ${media("<=tablet")} {
    font-size: 20px;
    margin: 0 2rem;
    margin-bottom: 3rem;
  }
`;
const Row = styled.div`
  margin: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    width: 14rem;
    margin-right: 1rem;
  }
  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
const ReversedRow = styled.div`
  margin: 5rem 1rem;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  .image {
    width: 14rem;
    margin-left: 1rem;
  }
  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
const Description = styled.span`
  font-size: 16px;
  text-align: left;
  font-weight: normal;
  /* margin: 10rem 10rem; */
  font-family: "Poppins", sans-serif;

  ${media("<=tablet")} {
    font-size: 14px;
    margin: 5rem 1rem;
    text-align: center;
  }
`;
