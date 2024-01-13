import styled from "styled-components";
import BGimg from "../../assests/Wrapper.png"

export const JourneyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vw;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${BGimg}) no-repeat;
    background-size: cover;
    filter: blur(2px);
    z-index: -1;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 75px;
  color: white;
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

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 50px;
  color: white;
  text-align: center;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 1;
  }
`;