import React from "react";
import {
  HomeBottomContainer,
  HomeContainer,
  HomeInnerContainer,
  HomeLeftContainer,
  HomeRightContainer,
  SVGContainer,
  Span,
  SubTitle,
  Title,
} from "./HomeStyle";
import { Button } from "@mui/material";
import  HomeImg  from "../../assests/Vector.svg"
import Rocket from "../../assests/rocket.svg"
import World from "../../assests/world.svg"
import Trophy from "../../assests/trophy.svg"
import User from "../../assests/user.svg"

const Home = () => {
  return (
    <div id="home">
      <HomeContainer>
        <HomeInnerContainer>
          <HomeLeftContainer>
            <Title>
              Empowering Your
              <br />
              Business <Span>Success</Span>
            </Title>
            <SubTitle>
              AccFin streamlines Business Setup, Bookkeeping, Legal Services,
              Payroll Management, and offers Dedicated Support our advanced
              Technology Platform. Unlock success effortlessly with AccFin
              <br />- your partner for business prosperity.
            </SubTitle>
            <Button variant="contained" sx={{ width: "200px", height: "50px" }}>
              Our Services
            </Button>
          </HomeLeftContainer>
          <HomeRightContainer>
            <img src={HomeImg} alt="" />
          </HomeRightContainer>
        </HomeInnerContainer>
      </HomeContainer>
      <HomeBottomContainer>
        <SVGContainer>
          <img src={Rocket} alt="" />
          <div>
            <h1>89+</h1>
            <p>Business Boosted</p>
          </div>
        </SVGContainer>
        <SVGContainer>
          <img src={World} alt="" />
          <div>
            <h1>3</h1>
            <p>Different Regions</p>
          </div>
        </SVGContainer>
        <SVGContainer>
          <img src={Trophy} alt="" />
          <div>
            <h1>18</h1>
            <p>Industry Awards</p>
          </div>
        </SVGContainer>
        <SVGContainer>
          <img src={User} alt="" />
          <div>
            <h1>75+</h1>
            <p>Satisfied Customers</p>
          </div>
        </SVGContainer>
      </HomeBottomContainer>
    </div>
  );
};

export default Home;
