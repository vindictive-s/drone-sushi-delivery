import React from "react";
import {
  TrackContainer,
  TrackBg,
  ImageBg,
  TrackWrapper,
  TrackH1,
  TrackMap,
  TrackMapWr,
  TrackDetails,
  TrackInput,
} from "./TrackSection.styled";

const TrackSection = () => {
  return (
    <TrackContainer id="track">
      <TrackWrapper>
        <TrackMapWr>
          <TrackH1>Map</TrackH1>
          <TrackMap />
        </TrackMapWr>
        <TrackDetails>
          <TrackH1>Search for your order</TrackH1>
          <TrackInput>INPUT container</TrackInput>
        </TrackDetails>
      </TrackWrapper>
    </TrackContainer>
  );
};

export default TrackSection;
