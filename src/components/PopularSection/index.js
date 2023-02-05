import React, { useState, useEffect } from "react";
import IconDeal from "../../assets/images/image-delivery-deal.jpg";
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
  PopularH3,
  PopularWrapper,
  PopularWr,
  PopularCard,
  PopularIcon,
  PopularP,
  PopularBtnWrapper,
  PopularBtnWrap,
  PopularDeal,
  PopularDealCard,
  PopularDealIcon,
} from "./PopularSection.styled";
import { Button } from "../Button.styled";

const PopularSection = ({ slides }) => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [hover, setHover] = useState(false);
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

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
          <Button
            onMouseEnter={onHoverLeft}
            onMouseLeave={onHoverLeft}
            onClick={prevSlide}
          >
            {hoverLeft ? <ArrowBack /> : <ArrowLeft />}{" "}
          </Button>
          <Button
            onMouseEnter={onHoverRight}
            onMouseLeave={onHoverRight}
            onClick={nextSlide}
          >
            {hoverRight ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </PopularBtnNav>
      </PopularWrapperNav>
      <PopularWrapper>
        {slides.map((slide, index) => {
          return (
            <PopularCard
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <PopularWr>
                  <PopularIcon src={slide.image} />
                  <PopularH2>{slide.title}</PopularH2>
                  <PopularP>{slide.description}</PopularP>
                  <PopularBtnWrapper>
                    <Button>From $3.99</Button>
                  </PopularBtnWrapper>
                </PopularWr>
              )}
            </PopularCard>
          );
        })}
      </PopularWrapper>
      <PopularDeal>
        <PopularDealCard>
          <PopularDealIcon src={IconDeal} />
          <PopularH3>15% off delivery with code: 15FLYBY</PopularH3>
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
