import React from "react";
import { Input } from "../Input.styled";
import { ButtonS } from "../ButtonS.styled";
import ImgMap from "../../assets/images/image-map-dark.png";
import {
  TrackContainer,
  TrackWrapper,
  TrackH1,
  TrackMap,
  TrackMapWr,
  TrackDetails,
} from "./TrackSection.styled";

const TrackSection = () => {
  return (
    <TrackContainer id="track">
      <TrackWrapper>
        <TrackH1>Search for your order</TrackH1>
        <TrackDetails>
          <Input type="string" placeholder="Search" />
          <ButtonS>Go</ButtonS>
        </TrackDetails>
        <TrackMapWr>
          <TrackH1>Map</TrackH1>
          <TrackMap src={ImgMap} />
        </TrackMapWr>
      </TrackWrapper>
    </TrackContainer>
  );
};

export default TrackSection;
