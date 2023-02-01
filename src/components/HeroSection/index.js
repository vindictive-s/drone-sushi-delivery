import React, { useState } from "react";
import { Button } from "../Button.styled";
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
          <Button onMouseEnter={onHover} onMouseLeave={onHover}>
            GO TO CATALOG{hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
