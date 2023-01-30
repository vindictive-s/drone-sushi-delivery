import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  height: 200px;
  background: lightpink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  height: 80px;
  background: lightblue;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  height: 100%;
  background-color: #272727;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  margin-left: 24px;
`;
