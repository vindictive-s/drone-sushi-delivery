import React, { useState } from "react";
import InfoIconDelivery from "../../assets/images/background-drone.jpeg";
import InfoIconTechnology from "../../assets/images/image-city.jpeg";
import InfoRevAvatar from "../../assets/images/image-city.jpeg";
import {
  InfoContainer,
  InfoTD,
  InfoTechnology,
  InfoDelivery,
  InfoWrapper,
  InfoH1,
  InfoH2,
  InfoRevH2,
  InfoH3,
  InfoP,
  InfoIcon,
  InfoRevContainer,
  InfoCard,
  InfoRevIcon,
  InfoBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./InfoSection.styled";
import { ButtonS } from "../ButtonS.styled";

const InfoSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <InfoContainer id="about">
      <InfoTD>
        <InfoTechnology>
          <InfoH1>Technology</InfoH1>
          <InfoIcon src={InfoIconTechnology} />
          <InfoH3>Read about our technology and promise to the future.</InfoH3>
        </InfoTechnology>
        <InfoDelivery>
          <InfoH1>Delivery</InfoH1>
          <InfoIcon src={InfoIconDelivery} />
          <InfoH3>Read about our drone fleet and pilots.</InfoH3>
        </InfoDelivery>
      </InfoTD>
      <InfoRevContainer>
        <InfoH2>Customer Reviews</InfoH2>
        <InfoBtnWrapper>
          <ButtonS onMouseEnter={onHover} onMouseLeave={onHover}>
            Go to Reviews{hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </ButtonS>
        </InfoBtnWrapper>
        <InfoWrapper>
          <InfoCard>
            <InfoRevIcon src={InfoRevAvatar} />
            <InfoRevH2>John Smith</InfoRevH2>
            <InfoP>
              Great delivery service and awesome cuisine. Cannot stop ordering
              from them.
            </InfoP>
          </InfoCard>
          <InfoCard>
            <InfoRevIcon src={InfoRevAvatar} />
            <InfoRevH2>John Smith</InfoRevH2>
            <InfoP>
              Great delivery service and awesome cuisine. Cannot stop ordering
              from them.
            </InfoP>
          </InfoCard>
          <InfoCard>
            <InfoRevIcon src={InfoRevAvatar} />
            <InfoRevH2>John Smith</InfoRevH2>
            <InfoP>
              Great delivery service and awesome cuisine. Cannot stop ordering
              from them.
            </InfoP>
          </InfoCard>
          <InfoCard>
            <InfoRevIcon src={InfoRevAvatar} />
            <InfoRevH2>John Smith</InfoRevH2>
            <InfoP>
              Great delivery service and awesome cuisine. Cannot stop ordering
              from them.
            </InfoP>
          </InfoCard>
          <InfoCard>
            <InfoRevIcon src={InfoRevAvatar} />
            <InfoRevH2>John Smith</InfoRevH2>
            <InfoP>
              Great delivery service and awesome cuisine. Cannot stop ordering
              from them.
            </InfoP>
          </InfoCard>
        </InfoWrapper>
      </InfoRevContainer>
    </InfoContainer>
  );
};

export default InfoSection;
