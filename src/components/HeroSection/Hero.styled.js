import styled from "styled-components";
import Image from "../../assets/images/background-home.jpg";
import Image2 from "../../assets/images/background-home-shrink2.jpg";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;

export const HeroImage = styled.div`
  display: flex;
`;

export const ImageIl = styled.div``;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;

  @media screen and (max-width: 1050px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 680px) {
    font-size: 1.8rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 5rem;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 1050px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 680px) {
    font-size: 1rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
