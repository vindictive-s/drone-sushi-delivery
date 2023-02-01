import React, { useState } from "react";
import Icon1 from "../../assets/images/background-drone.jpeg";
import IconDeal from "../../assets/images/background-drone.jpeg";
import {
  PopularContainer,
  PopularWrapperNav,
  PopularBtnNav,
  ArrowBack,
  ArrowLeft,
  ArrowForward,
  ArrowRight,
  PopularH1,
  PopularH2,
  PopularWrapper,
  PopularCard,
  PopularIcon,
  PopularH3,
  PopularBtnWrapper,
  PopularBtnWrap,
  PopularDeal,
  PopularDealCard,
  PopularDealIcon,
} from "./PopularSection.styled";
import { Button } from "../Button.styled";

const PopularSection = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const onHoverLeft = () => {
    setHoverLeft(!hoverLeft);
  };
  const onHoverRight = () => {
    setHoverRight(!hoverRight);
  };

  return (
    <PopularContainer id="menu">
      <PopularWrapperNav>
        <PopularH1>Popular Categories</PopularH1>
        <PopularBtnNav>
          <Button onMouseEnter={onHoverLeft} onMouseLeave={onHoverLeft}>
            {hoverLeft ? <ArrowBack /> : <ArrowLeft />}{" "}
          </Button>
          <Button onMouseEnter={onHoverRight} onMouseLeave={onHoverRight}>
            {hoverRight ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </PopularBtnNav>
      </PopularWrapperNav>
      <PopularWrapper>
        <PopularCard>
          <PopularIcon src={Icon1} />
          <PopularH2>Sushi Rolls</PopularH2>
          <PopularH3>20% discount</PopularH3>
          <PopularBtnWrapper>
            <Button>Check out!</Button>
          </PopularBtnWrapper>
        </PopularCard>
      </PopularWrapper>
      <PopularDeal>
        <PopularDealCard>
          <PopularDealIcon src={IconDeal} />
        </PopularDealCard>
      </PopularDeal>
      <PopularBtnWrap>
        <Button onMouseEnter={onHover} onMouseLeave={onHover}>
          FULL MENU{hover ? <ArrowForward /> : <ArrowRight />}{" "}
        </Button>
      </PopularBtnWrap>
    </PopularContainer>
  );
};

export default PopularSection;
