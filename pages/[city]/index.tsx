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
          <div className="mb-32 mx-auto justify-center items-center grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-16 md:gap-y-32 lg:gap-x-32 max-w-[90%]">
            {services.map((singleFeature, idx) => (
              <ServiceButton
                onClick={() => {
                  router.push(`/services/${singleFeature.slug.current}`);
                }}
              >
                {singleFeature.title}
              </ServiceButton>
            ))}
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
const ServiceButton = styled.button`
  color: white;
  background-color: #0a3161;
  padding: 10px 10px;
  font-weight: bold;
  font-size: 2rem;
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
