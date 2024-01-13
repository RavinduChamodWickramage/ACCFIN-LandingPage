import styled from "styled-components";

export const KnowledgeHubContainer = styled.div`
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

export const KnowledgeHubTopContainer = styled.div`
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

export const KnowledgeHubCenterContainer = styled.div`
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

  #Card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding-bottom: 30px;
    padding: 10px;
  }

  img {
    width: 94%;
    margin: 10px;
  }

  p {
    color: black;
    padding-bottom: 30px;
  }

  #div {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
  }

  .vertical-line {
    border-left: 5px solid #025da0;
    height: 100px;
    padding-right: 20px;
  }

  #date {
    color: #767879;
    padding-bottom: 0px;
    padding-top: 10px;
  }

  a {
    color: #025da0;
  }
`;
