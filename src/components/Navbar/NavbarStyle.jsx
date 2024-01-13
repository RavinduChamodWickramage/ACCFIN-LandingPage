import styled from "styled-components";

export const Nav = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 95vw;
  padding: 0 10px;
  max-width: 95vw;
  margin: 0 auto;
`;

export const NavLogo = styled.div`
  width: 95vw;
  padding: 0 25px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 50px;
  color: #117ebf;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #0964a5;
  }
`;

export const NavItems = styled.ul`
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #303233;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0964a5;
    border-bottom: 2px solid;
  }

  &.active {
    color: #0964a5;
    border-bottom: 2px solid;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: white;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileLink = styled.a`
  color: #303233;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0964a5;
    border-bottom: 2px solid;
  }

  &.active {
    color: #0964a5;
    border-bottom: 2px solid;
  }
`;