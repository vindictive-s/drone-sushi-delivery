import styled from "styled-components";
import {
  MdKeyboardArrowLeft,
  MdArrowBack,
  MdKeyboardArrowRight,
  MdArrowForward,
} from "react-icons/md";

export const PopularContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(#e2e2e2, #f3f3f3);
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const PopularWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopularWrapperNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const PopularBtnNav = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const ArrowBack = styled(MdArrowBack)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const PopularH1 = styled.h1`
  font-size: 2rem;
  color: #2d2d2d;
`;

export const PopularH2 = styled.h2`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

export const PopularP = styled.p`
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

export const PopularCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PopularWr = styled.div`
  padding: 20px;
  background-color: #e2e2e2;
  border-radius: 20px;
  height: 350px;

  @media screen and (min-width: 1050px) {
    width: 500px;
  }
`;

export const PopularBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const PopularBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const PopularIcon = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (min-width: 1050px) {
    width: 460px;
  }
`;

export const PopularDeal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const PopularDealCard = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PopularH3 = styled.h3`
  position: absolute;
  color: #2d2d2d;
  font-size: 1rem;
  padding: 10px;
  background: linear-gradient(#e2e2e2, #f3f3f3);
  border-radius: 0 5px 5px 0;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media screen and (min-width: 1050px) {
    font-size: 2rem;
    border-radius: 0 10px 10px 0;
  }
`;

export const PopularDealIcon = styled.img`
  height: 10rem;
  width: 60vw;
  position: relative;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (min-width: 1050px) {
    height: 200px;
  }
`;
