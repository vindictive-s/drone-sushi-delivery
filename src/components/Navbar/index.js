import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./Navbar.styled";
import Image from "../../assets/images/logo-2.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Image} />
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
