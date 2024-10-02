import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import Logo from "../images/logo.svg";
import { Light, Dark } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Spin } from "./globalStyledComponents";
import { Tilt } from 'react-tilt';
import SocialLinks from "./SocialLinks"; 

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(135deg, var(--primary), var(--bs-light))"
        : "linear-gradient(135deg, var(--primary), var(--bs-dark))"};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2)"};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      animation: ${Spin} infinite 20s linear;
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) top center fixed no-repeat`
          : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) center center fixed no-repeat`
          : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
  }

  /* Ensure the social links are always on top */
  .social-links {
    z-index: 2;
    position: relative;
  }

  /* Ensure the logo doesn't cover the social links */
  .logo-container {
    position: relative;
    z-index: 1;
    padding-top: 5rem; /* Add padding to avoid overlap */
  }
`;

export default function Hero() {
  const { name } = useSelector(selectData);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX * -1) / 20;
      const moveY = (e.clientY * -1) / 20;
      document.documentElement.style.setProperty('--mouse-x', `${moveX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${moveY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <StyledHero>
      <Container>
        
        {/* First Row for Name and Social Links */}
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="mb-3 display-3 title">{name}</h1>
            <div className="d-flex align-items-center justify-content-center social-links">
              <SocialLinks />
            </div>
          </Col>
          <Col></Col>
        </Row>

        {/* New Row for React Logo */}
        <Row className="justify-content-center mt-3 logo-container">
          <Col className="d-none d-md-block text-center">
            <Tilt options={{ max: 35, scale: 1.05, speed: 400, glare: true, "max-glare": 0.5 }}>
              <img
                src={Logo}
                alt="React Logo"
                className="w-75 mx-auto hero-img"
              />
            </Tilt>
          </Col>
          <Col></Col>
        </Row>

        {/* Existing Row for Down Arrow */}
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}
