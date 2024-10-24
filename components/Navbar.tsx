import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useNewsletterModalContext } from "contexts/newsletter-modal.context";
import {
  ScrollPositionEffectProps,
  useScrollPosition,
} from "hooks/useScrollPosition";
import { NavItems, SingleNavItem } from "types";
import { media } from "utils/media";
import Button from "./Button";
import Container from "./Container";
import Drawer from "./Drawer";
import { HamburgerIcon } from "./HamburgerIcon";
import Logo from "./Logo";
// import { HoverUnderlineAnimation } from 'utils/styled-animations';
import NextImage from "next/image";
import { cities, findSubdomain } from "@/utils/cities";
import { formatCityName, getCityFromPath } from "@/utils/formatString";

type NavbarProps = { items: NavItems };
type ScrollingDirections = "up" | "down" | "none";
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: any) {
  const router = useRouter();
  const { toggle } = Drawer.useDrawer();
  const currentPath = router.asPath;
  const city = getCityFromPath(
    currentPath.substring(currentPath.lastIndexOf("/") + 1)
  );
  const cityObject = findSubdomain(city);
  const [scrollingDirection, setScrollingDirection] =
    useState<ScrollingDirections>("none");

  let lastScrollY = useRef(0);
  const lastRoute = useRef("");
  const stepSize = useRef(50);
  const currentPage = router.pathname;

  useScrollPosition(
    scrollPositionCallback,
    [router.asPath],
    undefined,
    undefined,
    50
  );

  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;

    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection("none");
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;

    if (isInNonCollapsibleArea) {
      setScrollingDirection("none");
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrollingDirection(isScrollingUp ? "up" : "down");
    lastScrollY.current = currentScrollY;
  }

  const isNavbarHidden = scrollingDirection === "down";
  const isTransparent = scrollingDirection === "none";

  return (
    <NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
      <Content>
        <NextLink className="max-h-52" href="/" passHref>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </NextLink>
        <p className="var">
          {router.pathname !== "/"
            ? `${cityObject?.city ? cityObject?.city : `24/7 Local Locksmith`}`
            : `24/7 Local Locksmith`}
        </p>
        <div>
          <svg
            fill="#751318"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <span>
            <span className="phone mx-0 px-0">call us:</span>

            {router.pathname !== "/" ? (
              <>
                {cityObject?.phone ? (
                  <p className="num">{cityObject?.phone}</p>
                ) : (
                  <p className="num">(800) 687-0480</p>
                )}
              </>
            ) : (
              <p>(800) 687-0480</p>
            )}
          </span>
        </div>

        {/* <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper> */}
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
  const { setIsModalOpened } = useNewsletterModalContext();

  function showNewsletterModal() {
    setIsModalOpened(true);
  }

  return (
    <NavItemWrapper outlined={outlined}>
      <NextLink href={href} passHref>
        <div>{title}</div>
      </NextLink>
    </NavItemWrapper>
  );
}

const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;

const NavItemList = styled.div`
  /* background-color: greenyellow; */
  display: flex;
  list-style: none;
  width: 100%;
  font-size: 2rem;
  /* color: white; */
  div {
    display: flex;
  }
  svg {
    color: #751318;
    width: 20px;
  }
  span {
    /* color: white; */
    display: flex;
    margin-left: 1rem;
  }
  .var {
    margin-right: 1rem;
    color: #000;
  }
  .num {
    color: #000;
  }
  .phone {
    color: #751318;
  }
  p {
    /* color: white; */

    font-weight: 800;
  }
  ${media("<desktop")} {
  }
`;
const NavContainer = styled.div`
  /* background-color: green; */
  display: flex;
  list-style: none;
  font-size: 2rem;
  width: 100%;
  /* color: white; */
  div {
    display: flex;
  }
  svg {
    /* color: white; */
    width: 20px;
  }
  span {
    /* color: white; */
    display: flex;
    margin-left: 1rem;
    align-items: center;
    ${media("<tablet")} {
      font-size: 1rem;
    }
  }
  p {
    /* color: white; */

    font-weight: 800;
    ${media("<=smallPhone")} {
      font-size: 1rem;
    }
  }
  ${media("<=smallPhone")} {
    font-size: 1rem;
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${media(">=desktop")} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-right: auto;
  text-decoration: none;

  color: rgb(36, 58, 90);
`;

const HoverUnderlineAnimation = styled.div<Partial<SingleNavItem>>`
  display: inline-block;
  position: relative;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  ${(props) =>
    props.outlined
      ? css`
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: rgb(255, 175, 1);
          }
        `
      : css`
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: rgb(255, 175, 1);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }

          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: transparent;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 1.5;

  &:hover {
    transition: background-color 0.2s;
  }

  div {
    display: flex;
    color: rgb(10, 18, 30, 0.75);
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  max-height: 7.7rem;

  z-index: var(--z-navbar);

  background-color: #fff;

  visibility: ${(p) => (p.hidden ? "hidden" : "visible")};
  transform: ${(p) =>
    p.hidden
      ? `translateY(-8rem) translateZ(0) scale(1)`
      : "translateY(0) translateZ(0) scale(1)"};

  transition-property: transform, visibility, height, box-shadow,
    background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 2rem;
  /* color: white; */
  div {
    display: flex;
  }
  svg {
    color: #751318;
    width: 20px;
    margin-right: 4px;
  }
  span {
    /* color: white; */
    display: flex;
    /* margin-left: 1rem; */
  }
  .var {
    margin-right: 1rem;
    color: #000;
  }
  .num {
    color: #000;
  }
  .phone {
    color: #751318;
  }
  p {
    /* color: white; */

    font-weight: 800;
  }
  ${media("<=phone")} {
    font-size: 1rem;
  }
`;
