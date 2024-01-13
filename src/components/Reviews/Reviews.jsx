import React from 'react'
import { ReviewsContainer, ReviewsInnerContainer, ReviewsLeftContainer, ReviewsRightContainer, Span, SubTitle, Title } from './ReviewsStyle'
import ReviewsImg from "../../assests/MSP-13_1.svg"
import David from "../../assests/DavidW.jpg"
import John from "../../assests/JohnD.jpg"
import Sarah from "../../assests/SarahL.jpg"
import { Grid, Paper } from '@mui/material';

const Reviews = () => {
  return (
    <div>
      <ReviewsContainer>
        <ReviewsInnerContainer>
          <ReviewsLeftContainer>
            <h3 style={{ color: "#025da0" }}>Hear From Our Clients</h3>
            <Title>
              What People Say <Span>About Us</Span>
            </Title>
            <SubTitle>
              Discover what our satisfied clients say about their experience
              with
              <br />
              ACCFIN's exceptional services and support.
            </SubTitle>
            <img src={ReviewsImg} alt="" style={{ width: "50%" }} />
          </ReviewsLeftContainer>
          <ReviewsRightContainer>
            <Paper elevation={1} id="Paper">
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <div className="circle-mask">
                    <img src={John} alt="" />
                  </div>
                </Grid>
                <Grid item xs={9} id="Review">
                  <h3>John D.</h3>
                  <p>
                    ACCFIN has been instrumental in our business growth. Their
                    expertise in financial management is unmatched.
                  </p>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={4} id="Paper">
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <div className="circle-mask">
                    <img src={David} alt="" />
                  </div>
                </Grid>
                <Grid item xs={9} id="Review">
                  <h3>David W.</h3>
                  <p>
                    ACCFIN's legal services team navigated complex regulations
                    effortlessly, ensuring our business stays compliant and
                    secure.
                  </p>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={1} id="Paper">
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <div className="circle-mask">
                    <img src={Sarah} alt="" />
                  </div>
                </Grid>
                <Grid item xs={9} id="Review">
                  <h3>Sarah L.</h3>
                  <p>
                    Efficient, reliable, and responsive-ACCFIN has been a true
                    partner in managing our payroll seamlessly.
                  </p>
                </Grid>
              </Grid>
            </Paper>
          </ReviewsRightContainer>
        </ReviewsInnerContainer>
      </ReviewsContainer>
    </div>
  );
}

export default Reviews
