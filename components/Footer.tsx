import NextLink from "next/link";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
import styled from "styled-components";
import Container from "components/Container";
import { media } from "utils/media";
import RichText from "./RichText";
import Logo from "./Logo";
import Link from "next/link";
import WaveCta from "./WaveCta";
import NextImage from "next/image";

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: "Useful Links",
    items: [{ title: "Privacy Policy", href: "/privacy-policy" }],
  },
  {
    title: "Footer Links",
    items: [
      { title: "Home", href: "/" },
      { title: "Contact", href: "/contact" },
      { title: "Price", href: "/price" },
      { title: "Coupons", href: "/coupons" },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
          <WaveCta />
        </ListContainer>
        <BottomBar>
          <div>
            <Copyright>&copy; 2024 Copyright Oscar's Lock and Key</Copyright>
          </div>
        </BottomBar>
      </FooterContainer>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <>{title}</>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 7rem;
  padding-bottom: 4rem;
  background: rgb(21, 35, 62);
  color: rgb(255, 255, 255);
`;

const FooterContainer = styled(Container)`
  ${media("<=largeDesktop")} {
    max-width: 90%;
  }
  ${media("<=phone")} {
    max-width: 100%;
  }
`;

const LogoContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 100%;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media("<=tablet")} {
    justify-content: center;
    text-align: center;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;
const ListDescription = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  max-width: 30%;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media("<=tablet")} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media("<=phone")} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
    &:hover {
      color: rgba(255, 175, 1);
    }
  }
`;

const ShareBar = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${media("<tablet")} {
    display: flex;
  }
`;
const SocialmediaLink = styled.div`
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media("<=tablet")} {
    flex-direction: column;
    align-items: center;
  }
`;
