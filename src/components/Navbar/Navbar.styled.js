import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
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
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1050px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #2d2d2d;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d2d2d;
  border-radius: 50px;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavTitle = styled.h1`
  display: none;
  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;

export const NavH1 = styled.h1`
  height: 80px;
  display: flex;
  align-items: center;
  color: #2d2d2d;
`;

export const NavH2 = styled.h2`
  height: 80px;
  display: flex;
  align-items: center;
  color: #e2e2e2;
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    color: #e02f45;
    transition: 0.2 ease-in-out;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavQuick = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #e02f45;
    transition: 0.2 ease-in-out;
  }
`;
