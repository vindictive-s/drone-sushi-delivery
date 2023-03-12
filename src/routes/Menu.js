import React from "react";
import Footer from "../components/Footer";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavTitle,
  NavH1,
  NavH2,
} from "../components/Navbar/Navbar.styled";
import {
  MenuContainer,
  MenuWrapper,
  MenuItem,
  MenuImg,
  MenuTitle,
  MenuPrice,
  MenuDeal,
} from "./Menu.styled";
import Image from "../assets/images/logo-2.svg";

const Menu = ({ items }) => {
  return (
    <div className="menu">
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Image} alt="logo" />
          </NavLogo>
          <NavTitle>
            <NavH1>DRONE</NavH1>
            <NavH2>SUSHI</NavH2>
          </NavTitle>
        </NavbarContainer>
      </Nav>
      <MenuContainer>
        <MenuWrapper>
          {items.map((item, index) => {
            return (
              <MenuItem>
                <MenuImg src={item.image} alt="" />
                <MenuTitle>{item.title}</MenuTitle>
                <MenuPrice>{item.price}</MenuPrice>
                <MenuDeal>{item.deal}</MenuDeal>
              </MenuItem>
            );
          })}
        </MenuWrapper>
      </MenuContainer>
      <Footer className="footer" />
    </div>
  );
};

export default Menu;
