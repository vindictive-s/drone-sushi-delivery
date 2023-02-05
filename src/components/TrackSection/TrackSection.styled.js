import styled from "styled-components";

export const TrackContainer = styled.div`
  background: #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const TrackWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header"
    "map details";

  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "map"
      "details";
  }
`;

export const TrackMapWr = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  margin: 20px;
`;

export const TrackH1 = styled.h1`
  font-size: 2rem;
  color: #2d2d2d;
  max-width: 360px;
  margin-bottom: 10px;
  grid-area: header;
`;

export const TrackMap = styled.img`
  height: 220px;
  width: 360px;
  border-radius: 5px;
  object-fit: cover;
  grid-area: map;
`;

export const TrackDetails = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  margin: 20px;
  grid-area: details;
`;
