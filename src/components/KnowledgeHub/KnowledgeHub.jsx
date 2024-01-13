import React from 'react'
import { KnowledgeHubCenterContainer, KnowledgeHubContainer, KnowledgeHubTopContainer, Span, SubTitle, Title } from './KnowledgeHubStyle'
import { Card, CardContent, Grid, IconButton } from '@mui/material';
import StartUpImg from "../../assests/person-using-tablet.jpg"
import TechnologyImg from "../../assests/business-internet-technology-concept-businessman-touching-screen-smartphone-with-menu-interface 1.png"
import LadyImg from "../../assests/woman-holding-network-graphic-overlay-banner 1.png"
import { IoIosArrowRoundForward } from 'react-icons/io';

const KnowledgeHub = () => {
  return (
    <div id="knowledgehub">
      <KnowledgeHubContainer>
        <KnowledgeHubTopContainer>
          <h3 style={{ color: "#025da0" }}>Unlock Insights</h3>
          <Title>
            Knowledge <Span>Hub</Span>
          </Title>
          <SubTitle>
            Explore our repository of valuable insights and resources to stay
            informed and empowered
            <br />
            in your business journey
          </SubTitle>
        </KnowledgeHubTopContainer>
        <KnowledgeHubCenterContainer>
          <Grid
            container
            spacing={10}
            style={{ display: "flex", alignItems: "center" }}
            id="grid"
          >
            <Grid item xs={1.5} />
            <Grid item xs={3}>
              <Card id="Card">
                <img src={StartUpImg} alt="" />
                <div id="div">
                  <div class="vertical-line"></div>
                  <div class="div">
                    <h4>10 Essential Tips for Starting a Small Business</h4>
                    <p id="date">13-Sept-2023</p>
                  </div>
                </div>
                <CardContent>
                  <p>
                    Starting a small business is an exciting endeavor, but it
                    comes with challenges. In this blog post, we provide ten
                    valuable ti...
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
            <Grid item xs={3}>
              <Card id="Card">
                <img src={TechnologyImg} alt="" />
                <div id="div">
                  <div class="vertical-line"></div>
                  <div class="div">
                    <h4>10 Essential Tips for Starting a Small Business</h4>
                    <p id="date">13-Sept-2023</p>
                  </div>
                </div>
                <CardContent>
                  <p>
                    Starting a small business is an exciting endeavor, but it
                    comes with challenges. In this blog post, we provide ten
                    valuable ti...
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
            <Grid item xs={3}>
              <Card id="Card">
                <img src={LadyImg} alt="" />
                <div id="div">
                  <div class="vertical-line"></div>
                  <div class="div">
                    <h4>10 Essential Tips for Starting a Small Business</h4>
                    <p id="date">13-Sept-2023</p>
                  </div>
                </div>
                <CardContent>
                  <p>
                    Starting a small business is an exciting endeavor, but it
                    comes with challenges. In this blog post, we provide ten
                    valuable ti...
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
            <Grid item xs={1.5} />
          </Grid>
        </KnowledgeHubCenterContainer>
      </KnowledgeHubContainer>
    </div>
  );
}

export default KnowledgeHub
