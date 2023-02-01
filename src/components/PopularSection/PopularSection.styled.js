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
  gap: 1rem;
  padding-bottom: 32px;
`;

export const PopularWrapperNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
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

export const PopularH3 = styled.h3`
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

export const PopularCard = styled.div`
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PopularBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PopularBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const PopularIcon = styled.img`
  height: 160px;
  width: 160px;
  object-fit: cover;
  border-radius: 5px;
`;

export const PopularDeal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const PopularDealCard = styled.div`
  display: flex;
  align-items: center;
`;

export const PopularDealIcon = styled.img`
  height: 10rem;
  width: 60vw;
  object-fit: cover;
  border-radius: 10px;
`;
