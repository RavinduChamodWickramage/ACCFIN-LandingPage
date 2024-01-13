import styled from "styled-components";

export const HomeContainer = styled.div`
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

export const HomeInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  max-width: 80vw;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 66px 16px;
  }
`;

export const HomeLeftContainer = styled.div`
  width: 95vw;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeRightContainer = styled.div`
  width: 95vw;
  display: flex;
  order: 2;
  justify-content: flex-end;
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
  font-size: 75px;
  color: #303233;
  line-height: 100px;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 60px;
    line-height: 80px;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
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

  @media (max-width: 960px) {
    text-align: center;
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const HomeBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const SVGContainer = styled.div`
  width: 95vw;
  color: #025da0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  line-height: 1.1;

  @media (max-width: 786px) {
    width: 100%;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
  }
`;
