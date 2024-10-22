import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Head from "next/head";
import styled from "styled-components";
import BasicSection from "components/BasicSection";
// import Link from "components/Link";
import { EnvVars } from "env";
import Cta from "views/HomePage/Cta";
import ServicesGallery from "views/HomePage/ServicesGallery";
import Partners from "views/HomePage/Partners";
import Divider from "components/Divider";
import Slider from "components/Slider";
import BlogPostSlider from "@/views/HomePage/BlogPostSlider";
import "./style.css";
import {
  getAllPartners,
  getAllPosts,
  getAllServices,
  getAllTestimonials,
  getClient,
} from "@/sanity/lib/client";
import HomeBasicSection from "@/components/HomeBasicSection";
import ServiceCard from "@/components/ServiceCard";
import ServicesSection from "@/components/ServicesSection";
import OurTeam from "@/views/AboutPage/OurTeam";
import Tabs from "@/components/Tabs";
import TextWrapper from "@/components/TextWrapper";
import { PortableText } from "@portabletext/react";
import { description } from "../lib/demo.data";
import PostBody from "@/components/PostBody";
import { useRouter } from "next/router";
import About from "@/components/About";
import { media } from "@/utils/media";
import ServicesGrid from "@/components/ServicesGrid";
import TextBubble from "@/components/TextBubble";

const client = getClient();

export default function Homepage({
  services,
  testimonials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="We empower organizations through strategic HR solutions. We bridge skill gaps, foster diversity, and optimize workforce potential, delivering comprehensive HR consultancy services that ensure compliance, boost engagement, and drive sustainable growth."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Slider />

          {/* <Divider /> */}
          {/* <ServicesSection title="We offer these professional services"></ServicesSection> */}
          <div className="xl:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 space-y-2 lg:space-y-0 max-w-full">
            <div className="flex flex-col">
              <ServicesGrid services={services} />
              <About />
            </div>
            <PaymentBox>
              <PaymentContainer>
                <img src="/payment.png" />
              </PaymentContainer>
              <TextBubble />
              <img src="/logos/LOGO.png" />
            </PaymentBox>
          </div>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <StyledTabs /> */}

          {/* <About /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
          <OurTeam testimonials={testimonials} />
          {/* <BlogPostSlider posts={posts} /> */}
          <Cta />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

export const PaymentContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: start;
  margin-top: -3.5rem;
  /* margin: 2rem 0; */
  align-items: start;
  /* border-left: solid 1px #83838390; */
  img {
    margin-bottom: auto;
    padding: 0;
  }
  ${media("<largeDesktop")} {
    margin-top: 0rem;
  }
`;
export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(251, 251, 253);
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 0rem;
  padding-right: 0rem;

  & > :last-child {
    /* padding-bottom: 15rem; */
  }

  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;

export async function getServerSideProps() {
  return {
    props: {
      posts: await getAllPosts(client),
      services: await getAllServices(client),
      testimonials: await getAllTestimonials(client),
    },
  };
}
