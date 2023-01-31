import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #2d2d2d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #e2e2e2;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.8rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #e2e2e2;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(7, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fb6d49;
    transition: 0.2 ease-in-out;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  background: #e2e2e2;
  border: none;
  border-radius: 10px;

  ::placeholder {
    color: #fb6d49;
  }
`;

export const TotalItems = styled.div`
  display: flex;
  font-size: 1rem;
  color: #e2e2e2;
  border: none;
  border-radius: 10px;

  &:hover {
    color: #fb6d49;
    transition: 0.2 ease-in-out;
  }
`;

export const CountItems = styled.div`
  margin-right: 0.5rem;
`;
