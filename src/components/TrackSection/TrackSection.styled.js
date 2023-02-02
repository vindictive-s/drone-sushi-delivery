import styled from "styled-components";
import Image from "../../assets/images/background-track.jpeg";

export const TrackContainer = styled.div`
  background: #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const TrackWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;

export const TrackMapWr = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: red;
  margin: 20px;
`;

export const TrackH1 = styled.h1`
  font-size: 2rem;
`;

export const TrackMap = styled.div`
  height: 300px;
  width: 400px;
  background-color: blue;
`;

export const TrackDetails = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: green;
  margin: 20px;
`;

export const TrackInput = styled.h2`
  font-size: 2rem;
`;
