import React, { useState } from "react";
import {
  OffersBottomContainer,
  OffersContainer,
  OffersTopContainer,
  Span,
  SubTitle,
  Title,
} from "./OffersStyle";
import { Card, CardContent, Grid, IconButton } from "@mui/material";
import AbstractImg from "../../assests/abstract_720652 1.svg";
import {
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowRoundForward,
} from "react-icons/io";

const Offers = () => {
  const [activeCard, setActiveCard] = useState(1);

  const handleCardChange = (direction) => {
    if (direction === "left" && activeCard > 0) {
      setActiveCard(activeCard - 1);
    } else if (direction === "right" && activeCard < 2) {
      setActiveCard(activeCard + 1);
    }
  };

  return (
    <div id="services">
      <OffersContainer>
        <OffersTopContainer>
          <h3 style={{ color: "#025da0" }}>What We Offer</h3>
          <Title>
            Our Comprehensive <Span>Services</Span>
          </Title>
          <SubTitle>
            Empowering businesses with tailored solution, AccFin ensures success
            through expert guidance, precision, and unwavering support
          </SubTitle>
        </OffersTopContainer>
        <OffersBottomContainer>
          <Grid
            container
            spacing={3}
            style={{ display: "flex", alignItems: "center" }}
            id="grid"
          >
            <Grid item xs={1.5}>
              <IconButton onClick={() => handleCardChange("left")}>
                <IoIosArrowDropleft
                  style={{ fontSize: "50px", color: "#025da0" }}
                />
              </IconButton>
            </Grid>
            {[0, 1, 2].map((index) => (
              <Grid item xs={3} key={index}>
                <Card
                  id="card"
                  className={index === activeCard ? "active-card" : ""}
                  onClick={() => setActiveCard(index)}
                >
                  <img src={AbstractImg} alt="" />
                  <CardContent>
                    <h1>Business Setup</h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Numquam deserunt iusto quaerat ea temporibus nostrum
                      adipisci consequuntur, facilis facere voluptas...
                    </p>
                    <button
                      style={{
                        color: "#025da0",
                        textDecoration: "none", 
                        backgroundColor: "transparent", 
                        border: "none", 
                        cursor: "pointer", 
                      }}
                    >
                      Read More{" "}
                      <IconButton>
                        <IoIosArrowRoundForward id="btn" />
                      </IconButton>
                    </button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={1.5}>
              <IconButton onClick={() => handleCardChange("right")}>
                <IoIosArrowDropright
                  style={{ fontSize: "50px", color: "#025da0" }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </OffersBottomContainer>
      </OffersContainer>
    </div>
  );
};

export default Offers;
