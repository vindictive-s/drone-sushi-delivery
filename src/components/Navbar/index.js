import React from "react";
import { FaBars } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { BsBasket3Fill } from "react-icons/bs";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavTitle,
  NavH1,
  NavH2,
  NavItem,
  NavQuick,
} from "./Navbar.styled";
import Image from "../../assets/images/logo-2.svg";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Image} />
          </NavLogo>
          <NavTitle>
            <NavH1>DRONE</NavH1>
            <NavH2>SUSHI</NavH2>
          </NavTitle>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-200}
              >
                HOME
              </NavLinks>
              <NavLinks
                to="menu"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-200}
              >
                MENU
              </NavLinks>
              <NavLinks
                to="track"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-200}
              >
                TRACK ORDER
              </NavLinks>
              <NavLinks
                to="payment"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-200}
              >
                PAYMENT
              </NavLinks>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-200}
              >
                ABOUT US
              </NavLinks>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-200}
              >
                CONTACT
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu>
            <NavItem>
              <NavQuick>
                <BsBasket3Fill />
              </NavQuick>
              <NavQuick>
                <GoSearch />
              </NavQuick>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
