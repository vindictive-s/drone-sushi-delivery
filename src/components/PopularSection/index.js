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
import { ButtonR } from "../ButtonR.styled";
import { ButtonS } from "../ButtonS.styled";

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
          <ButtonS
            onMouseEnter={onHoverLeft}
            onMouseLeave={onHoverLeft}
            onClick={prevSlide}
          >
            {hoverLeft ? <ArrowBack /> : <ArrowLeft />}{" "}
          </ButtonS>
          <ButtonS
            onMouseEnter={onHoverRight}
            onMouseLeave={onHoverRight}
            onClick={nextSlide}
          >
            {hoverRight ? <ArrowForward /> : <ArrowRight />}{" "}
          </ButtonS>
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
                    <ButtonS>From $3.99</ButtonS>
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
        <ButtonR onMouseEnter={onHover} onMouseLeave={onHover} to="/menu">
          FULL MENU{hover ? <ArrowForward /> : <ArrowRight />}{" "}
        </ButtonR>
      </PopularBtnWrap>
    </PopularContainer>
  );
};

export default PopularSection;
