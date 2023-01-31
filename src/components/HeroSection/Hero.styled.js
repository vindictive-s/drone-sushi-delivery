import styled from "styled-components";
import Image from "../../assets/images/background-home.jpg";
import Image2 from "../../assets/images/background-home-shrink.jpg";

export const HeroContainer = styled.div`
  background: #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: -200px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Image});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1050px) {
    background-image: url(${Image2});
  }
`;
