import styled from "styled-components";

export const AboutContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 80px 30px;
  max-width: 80vw;
  margin: 0 auto;

  @media (max-width: 960px) {
    padding: 66px 16px;
    align-items: center;

    img {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    padding: 32px 16px;

    img {
      width: 100%;
    }
  }

  z-index: 1;
`;

export const AboutInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  max-width: 80vw;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const AboutRightContainer = styled.div`
  width: 95vw;
  justify-content: flex-end;
  order: 2;
  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutLeftContainer = styled.div`
  width: 95vw;
  display: flex;
  order: 1;
  justify-content: flex-start;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: #303233;
  line-height: 1;
  margin-bottom: 20px;
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
  text-align: justify;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 1;
  }
`;