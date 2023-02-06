import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? "linear-gradient(30deg, #f28e26, #fd644f)" : "transparent"};
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 30;

  @media screen and (max-width: 1000px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  height: 100%;
  background-color: #2d2d2d;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  margin-left: 1rem;
`;

export const NavTitle = styled.h1`
  display: flex;
`;

export const NavH1 = styled.h1`
  height: 60px;
  display: flex;
  align-items: center;
  color: #2d2d2d;
`;

export const NavH2 = styled.h2`
  height: 60px;
  display: flex;
  align-items: center;
  color: #e2e2e2;
`;

export const BasketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BasketWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#e2e2e2, #f3f3f3);
  border-radius: 0 5px 5px 0;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  height: 100%;
  min-width: 80%;
  padding: 20px;
  padding-bottom: 100px;
  border-radius: 10px;
  flex-direction: column;

  @media screen and (min-width: 1050px) {
    min-width: 50%;
  }
`;

export const BasketItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: solid #f3f3f3;
  padding: 0 10px 0 10px;
`;

export const BasketCount = styled.input`
  display: flex;
  margin-left: 30px;
  width: 3rem;
`;

export const BasketName = styled.h1`
  display: flex;
  font-size: 1rem;
  color: #2d2d2d;
`;

export const BasketPrice = styled.h1`
  font-size: 1rem;
  color: #2d2d2d;
`;

export const BasketTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: solid #fd644f;
  padding: 0 10px 0 10px;
`;

export const BasketTotalCount = styled.h1`
  display: flex;
  margin-left: 20px;
  font-size: 1rem;
  color: #2d2d2d;
`;

export const BasketTotalName = styled.h1`
  display: flex;
  font-size: 1rem;
  color: #2d2d2d;
`;

export const BasketTotalPrice = styled.h1`
  font-size: 1rem;
  color: #2d2d2d;
`;
