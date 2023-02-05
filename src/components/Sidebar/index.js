import React from "react";
import { Input } from "../Input.styled";
import { GoSearch } from "react-icons/go";
import { BsBasket3Fill } from "react-icons/bs";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  TotalItems,
  CountItems,
} from "./Sidebar.styled";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink>
            <Input type="text" placeholder="Search" />
            <GoSearch />
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            <TotalItems>
              <CountItems>0</CountItems>
              <BsBasket3Fill />
            </TotalItems>
          </SidebarLink>
          <SidebarLink to="menu" onClick={toggle}>
            MENU
          </SidebarLink>
          <SidebarLink to="track" onClick={toggle}>
            TRACK ORDER
          </SidebarLink>
          <SidebarLink to="payment" onClick={toggle}>
            PAYMENT
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            ABOUT US
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            CONTACT
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
