import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  color: white;
  background-color: #005ea2;
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  padding: 5%;

  @media (max-width: 960px) {
    padding: 66px 16px;
    align-items: center;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  #logo {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  #grid {
    display: flex;
    flex-direction: row;
    align-item: left;
    padding-bottom: 100px;
  }

  #grid2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  #grid2 > ul > li {
    margin-bottom: 20px;
  }

  #grid2 > p {
    margin-bottom: 40px;
  }

  #grid3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  #grid3 > p,
  #grid3 > div {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  #copyright {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2.5%;
  }

  #socialmedia {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 2.5%;
  }

  #grid,
  #grid2,
  #grid3,
  #Grid,
  #copyright,
  #socialmedia {
    @media (max-width: 960px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 200vw;
    }
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 50px;
  color: #00215d;
`;