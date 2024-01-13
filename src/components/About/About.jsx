import React from 'react'
import { AboutContainer, AboutInnerContainer, AboutLeftContainer, AboutRightContainer, Span, SubTitle, Title } from './AboutStyle'
import AboutImg from "../../assests/OBJECTS.svg"
import { Button } from '@mui/material';

const About = () => {
  return (
    <div id="aboutus">
      <AboutContainer>
        <AboutInnerContainer>
          <AboutLeftContainer>
            <img src={AboutImg} alt="" />
          </AboutLeftContainer>
          <AboutRightContainer>
            <h3 style={{ color: "#025da0" }}>About ACCFLN</h3>
            <Title>
              Your Business Partner
              <br />
              for <Span>Success</Span>
            </Title>
            <SubTitle>
              ACCFIN is your trusted partner for comprehensive business
              solutions. Our expert team specializes in Business Setup, Online
              Bookkeeping, Legal Services, Payroll Management, and cutting-edge
              Technology solutions. With a mission to simplify business
              management, we provide tailored support and guidance to help your
              business thrive. Our commitment to innovation keeps us at the
              forefront of technology, adapting to your evolving needs. Choose
              AccFin for a dedicated partner invested in your business's success
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SubTitle>
            <Button variant="contained" sx={{ width: "200px", height: "50px" }}>
              About Us
            </Button>
          </AboutRightContainer>
        </AboutInnerContainer>
      </AboutContainer>
    </div>
  );
}

export default About
