import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavTitle,
  NavH1,
  NavH2,
  BasketContainer,
  BasketWrapper,
  BasketItem,
  BasketCount,
  BasketName,
  BasketPrice,
  BasketTotal,
  BasketTotalCount,
  BasketTotalName,
  BasketTotalPrice,
} from "./Basket.styled";
import Image from "../assets/images/logo-2.svg";

const Basket = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 120) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="content">
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src={Image} />
            </NavLogo>
            <NavTitle>
              <NavH1>DRONE</NavH1>
              <NavH2>SUSHI</NavH2>
            </NavTitle>
          </NavbarContainer>
        </Nav>
        <div className="content-inside">
          <BasketContainer>
            <BasketWrapper>
              <BasketItem>
                <BasketName>
                  ITEM
                  <BasketCount type="number" name="quantity" />
                </BasketName>
                <BasketPrice>$4.99</BasketPrice>
              </BasketItem>
              <BasketTotal>
                <BasketTotalName>
                  TOTAL
                  <BasketTotalCount>0</BasketTotalCount>
                </BasketTotalName>
                <BasketTotalPrice>$4.99</BasketTotalPrice>
              </BasketTotal>
            </BasketWrapper>
          </BasketContainer>
        </div>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default Basket;
