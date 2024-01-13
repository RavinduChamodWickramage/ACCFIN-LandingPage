import styled from "styled-components";

export const PartnersContainer = styled.div`
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
`;

export const PartnersTopContainer = styled.div`
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

export const PartnersBottomContainer = styled.div`
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
`;
