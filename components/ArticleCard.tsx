import NextImage from "next/image";
import NextLink from "next/link";
import styled from "styled-components";
import { media } from "utils/media";
import Date from "components/PostDate";
import { Category } from "@/sanity/lib/queries";
import Link from "next/link";

export interface ArticleCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  categories: Category[];
}

export default function ArticleCard({
  title,
  slug,
  imageUrl,
  description,
  categories,
}: ArticleCardProps) {
  return (
    <NextLink href={"/posts/" + slug} passHref>
      <ArticleCardWrapper className="article-card-wrapper">
        <HoverEffectContainer>
          <ImageContainer>
            <NextImage
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </ImageContainer>
          <Content>
            <Title>{title}</Title>
            <Date dateString={description} />
            <div className="flex">
              {categories.map((category) => (
                // <button
                //   href={`/posts/category/${category.slug?.current}`}
                //   key={category.slug?.current}
                //   className="hover:text-[#f5bb28]"
                // >

                // </button>
                <p className=" text-[1rem] mr-1">
                  {" " + category.title + ","}
                </p>
              ))}
            </div>
          </Content>
        </HoverEffectContainer>
      </ArticleCardWrapper>
    </NextLink>
  );
}

const ArticleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45rem;
  max-width: 35rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.6rem;
  background: rgb(255, 255, 255);
  cursor: pointer;
  color: rgb(10, 18, 30);
`;

const HoverEffectContainer = styled.div`
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    border-radius: 0.6rem;
    overflow: hidden;
    transform: scale(1.025);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 20rem;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media("<=desktop")} {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 0 2rem;

  & > * {
    margin-top: 2rem;
  }
`;

const Title = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Description = styled.p`
  font-size: 1.6rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  opacity: 0.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;
