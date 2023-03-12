import React, { useState } from "react";
import { ButtonS } from "../ButtonS.styled";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroImage,
  ImageIl,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./Hero.styled";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg />
      </HeroBg>
      <HeroContent>
        <HeroImage>
          <ImageIl />
        </HeroImage>
        <HeroH1>Sushi delivered through the Sky</HeroH1>
        <HeroP>
          Sign up for a new account and receive $25 for your first order.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonS onMouseEnter={onHover} onMouseLeave={onHover}>
            GO TO CATALOG{hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </ButtonS>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
