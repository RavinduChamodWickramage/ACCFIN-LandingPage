import React, { useState } from 'react'
import { MobileIcon, MobileLink, MobileMenu, Nav, NavItems, NavLink, NavLogo, NavbarContainer, Span } from './NavbarStyle';
import { BusinessOutlined } from '@mui/icons-material';
import { FaBars } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";
import { Button } from '@mui/material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#025da0",
              marginBottom: "10;",
              cursor: "pointer",
            }}
          >
            <BusinessOutlined style={{ fontSize: "50px" }} />{" "}
            <Span>ACCFLN</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#aboutus">About Us</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#knowledgehub">Knowledge Hub</NavLink>
          <NavLink href="#careers">Careers</NavLink>
          <NavLink href="#contactus">Contact Us</NavLink>
          <FiSearch style={{ fontSize: "25px" }} />
          <Button variant="contained" sx={{ width: "200px", height: "50px" }}>
            Inquire Now
          </Button>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#home"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </MobileLink>
            <MobileLink
              href="#aboutus"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About Us
            </MobileLink>
            <MobileLink
              href="#services"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Services
            </MobileLink>
            <MobileLink
              href="#knowledgehub"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Knowledge Hub
            </MobileLink>
            <MobileLink
              href="#careers"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Careers
            </MobileLink>
            <MobileLink
              href="#contactus"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact Us
            </MobileLink>
            <FiSearch style={{ fontSize: "25px" }} />
            <Button variant="contained" sx={{ width: "200px", height: "25px" }}>
              Inquire Now
            </Button>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar
