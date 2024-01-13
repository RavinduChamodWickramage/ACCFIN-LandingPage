import styled from "styled-components";

export const OffersContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;
  max-width: 80vw;
  margin: 0 auto;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  #grid {
    @media (max-width: 960px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 200vw;
    }
  }
`;

export const OffersTopContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: #303233;
  line-height: 1;
  margin-bottom: 20px;
  padding-top: 20px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 1;
    margin-bottom: 10px;
  }
`;

export const Span = styled.span`
  color: #0a98ff;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 50px;
  color: #767879;
  text-align: center;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 1;
  }
`;

export const OffersBottomContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  position: relative;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }

  #card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding-bottom: 30px;
  }

  img {
    width: 15%;
    margin-left: 15px;
    margin-top: 50px;
  }

  p {
    color: #767879;
    padding-bottom: 30px;
  }

  a {
    color: #025da0;
  }

  #card.active-card {
    border: 2px solid #025da0;
    background: linear-gradient(to bottom right, #00355c, #01599a);
    border-radius: 20px 0 20px 0;
    height: 125%;
    transform: translateY(-10px);
    box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.6);
    color: white;

    a,
    p,
    button,
    #btn {
      color: white !important;
    }

    img {
      filter: brightness(0) invert(1);
    }
  }
`;