import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const InfoContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(#2d2d2d, #fb6d49);
`;

export const InfoTD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 200px;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 80px;
  }
`;

export const InfoTechnology = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const InfoDelivery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const InfoH1 = styled.h1`
  font-size: 2.4rem;
  top: 1.2rem;
  position: relative;
  z-index: 20;
  color: #e2e2e2;
`;

export const InfoH2 = styled.h2`
  font-size: 1rem;
  color: #e2e2e2;
`;

export const InfoRevH2 = styled.h2`
  font-size: 1rem;
  color: #2d2d2d;
`;

export const InfoH3 = styled.h3`
  font-size: 0.8rem;
  top: -2rem;
  position: relative;
  z-index: 20;
  color: #e2e2e2;
`;

export const InfoP = styled.p`
  font-size: 0.8rem;
  color: #2d2d2d;
`;

export const InfoIcon = styled.img`
  height: 200px;
  width: 400px;
  object-fit: cover;
  position: relative;
  border-radius: 10px;
`;

export const InfoRevContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  max-width: 100%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const InfoCard = styled.div`
  background: #e2e2e2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 10px;
  max-height: 160px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const InfoRevIcon = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  position: relative;
  border-radius: 25px;
  margin: 10px;
`;

export const InfoBtnWrapper = styled.div`
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
