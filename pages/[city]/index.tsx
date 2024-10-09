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
import { description } from "@/lib/demo.data";
import PostBody from "@/components/PostBody";
import { useRouter } from "next/router";
import { cities } from "@/utils/cities";
import { ServiceButton } from "@/pages/index";

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

          <Divider />
          <ServicesSection title="We offer these professional services"></ServicesSection>
          <div className="mb-32 mx-auto justify-center items-center grid grid-cols-1 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-16 md:gap-y-32 lg:gap-x-32 max-w-[90%]">
            {/* {services.map((singleFeature, idx) => (
              <ServiceButton
                onClick={() => {
                  router.push(`/services/${singleFeature.slug.current}`);
                }}
              >
                {singleFeature.title}
              </ServiceButton>
            ))} */}
            <ServiceButton
              onClick={() => {
                router.push(`/services/${services[2].slug.current}`);
              }}
            >
              <div className="w-7 h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 128 512"
                >
                  <path d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
              </div>

              <span>{services[2].title}</span>
            </ServiceButton>
            <ServiceButton
              onClick={() => {
                router.push(`/services/${services[0].slug.current}`);
              }}
            >
              <div className="w-20 h-w-20">
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />
                </svg>
              </div>
              <span>{services[0].title}</span>
            </ServiceButton>
            <ServiceButton
              onClick={() => {
                router.push(`/services/${services[3].slug.current}`);
              }}
            >
              <div className="w-10 h-w-10">
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                </svg>
              </div>
              <span>{services[3].title}</span>
            </ServiceButton>
            <ServiceButton
              onClick={() => {
                router.push(`/services/${services[1].slug.current}`);
              }}
            >
              <div className="h-14 w-14">
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                </svg>
              </div>
              <span>{services[1].title}</span>
            </ServiceButton>
            <ServiceButton
              onClick={() => {
                router.push(`/services/${services[4].slug.current}`);
              }}
            >
              <div className="h-20 w-20">
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </div>
              <span>{services[4].title}</span>
            </ServiceButton>
            <ServiceButton
              onClick={() => {
                router.push(`/services/${services[5].slug.current}`);
              }}
            >
              <div className="h-20 w-20">
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>
              </div>
              <span>{services[5].title}</span>
            </ServiceButton>
          </div>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <StyledTabs /> */}
          <Cta />

          {/* <ScrollableBlogPosts posts={posts} /> */}
          <OurTeam testimonials={testimonials} />
          {/* <BlogPostSlider posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
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
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

export async function getServerSideProps(ctx: any) {
  const { draftMode = false, params = {} } = ctx;
  return {
    props: {
      posts: await getAllPosts(client),
      services: await getAllServices(client),
      testimonials: await getAllTestimonials(client),
    },
  };
}
