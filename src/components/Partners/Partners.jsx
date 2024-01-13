import React from 'react'
import { PartnersBottomContainer, PartnersContainer, PartnersTopContainer, Span, SubTitle, Title } from './PartnersStyle'
import Sponsor1 from "../../assests/Group 1.svg"
import Sponsor2 from "../../assests/Group 3.svg";
import Sponsor3 from "../../assests/Group 4.svg";
import Sponsor4 from "../../assests/Group 5.svg";
import Sponsor5 from "../../assests/Group 6.svg";
import Sponsor6 from "../../assests/Group 7.svg";
import { Grid } from '@mui/material';

const Partners = () => {
  return (
    <div>
      <PartnersContainer>
        <PartnersTopContainer>
          <Title>
            Our Trusted <Span>Partners</Span>
          </Title>
          <SubTitle>
            Explore the succesful collaboration with our esteemed clients who have chosen<br />
            ACCFIN for their business needs
          </SubTitle>
        </PartnersTopContainer>
        <PartnersBottomContainer>
          <Grid container spacing={20}>
            <Grid item xs={2}>
              <img src={Sponsor1} alt="" />
            </Grid>
            <Grid item xs={2}>
              <img src={Sponsor2} alt="" />
            </Grid>
            <Grid item xs={2}>
              <img src={Sponsor3} alt="" />
            </Grid>
            <Grid item xs={2}>
              <img src={Sponsor4} alt="" />
            </Grid>
            <Grid item xs={2}>
              <img src={Sponsor5} alt="" />
            </Grid>
            <Grid item xs={2}>
              <img src={Sponsor6} alt="" />
            </Grid>
          </Grid>
        </PartnersBottomContainer>
      </PartnersContainer>
    </div>
  );
}

export default Partners
