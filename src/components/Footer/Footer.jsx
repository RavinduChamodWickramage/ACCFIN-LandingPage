import React from 'react'
import { FooterContainer, Span } from './FooterStyle'
import { Button, Grid, TextField } from '@mui/material'
import { BusinessOutlined } from "@mui/icons-material";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contactus">
      <FooterContainer>
        <Grid container spacing={5} id="grid">
          <Grid item xs={2.5} id="logo">
            <BusinessOutlined style={{ fontSize: "50px", color: "#002139" }} />{" "}
            <Span>ACCFLN</Span>
          </Grid>
          <Grid item xs={1.5} id="grid2">
            <p>Column One</p>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="#">Link One</a>
              </li>
              <li>
                <a href="#">Link Two</a>
              </li>
              <li>
                <a href="#">Link Three</a>
              </li>
              <li>
                <a href="#">Link Four</a>
              </li>
              <li>
                <a href="#">Link Five</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={1.5} id="grid2">
            <p>Column Two</p>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="#">Link Six</a>
              </li>
              <li>
                <a href="#">Link Seven</a>
              </li>
              <li>
                <a href="#">Link Eight</a>
              </li>
              <li>
                <a href="#">Link Nine</a>
              </li>
              <li>
                <a href="#">Link Ten</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={1.5} id="grid2">
            <p>Column Three</p>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="#">Link Eleven</a>
              </li>
              <li>
                <a href="#">Link Twelve</a>
              </li>
              <li>
                <a href="#">Link Thirteen</a>
              </li>
              <li>
                <a href="#">Link Fourteen</a>
              </li>
              <li>
                <a href="#">Link Fifteen</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={5} id="grid3">
            <p>Subcribe</p>
            <p>
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  color: "#002139",
                  width: "40vh",
                }}
              />
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  borderColor: "white",
                  marginLeft: "10px",
                  height: "6vh",
                }}
              >
                Subscribe
              </Button>
            </div>
            <p>
              By subscribing you agree to with our Privacy Policy and provide
              <br />
              consent to receive updates from our company.
            </p>
          </Grid>
        </Grid>
        <hr />
        <Grid
          container
          id="Grid"
          spacing={3}
        >
          <Grid item xs={6} id="copyright">
            <p>© {new Date().getFullYear()} 7Needle. All rights reserved</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </Grid>
          <Grid item xs={6} id="socialmedia">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </Grid>
        </Grid>
      </FooterContainer>
    </div>
  );
}

export default Footer
