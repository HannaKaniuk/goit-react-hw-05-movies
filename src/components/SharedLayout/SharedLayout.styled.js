import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 0;
  background: #6c827c;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const HeaderNavList = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 30px;
    padding: 10px 40px;
  }
`;

export const StyledHomeLink = styled(NavLink)`
  color: #ffffff;

  font-size: 24px;
  line-height: 1.19;
  padding: 16px 20px;
  text-decoration: none;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    padding: 16px 40px;
  }
`;

export const StyledLink = styled(NavLink)`
  gap: 10px;
  width: 70px;
  text-align: center;
  color: black;
  background-color: #e8eced;
  text-decoration: none;
  border-radius: 10px;
  transition: transform 0.2s;
  padding: 5px 15px;
  border: 1px solid #545252;

  &.active {
    background-color: #89d0bc;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const Hero = styled.div`
  background: linear-gradient(67deg, #111 6.82%, rgba(17, 17, 17, 0) 100%),
    url('https://cdn.pixabay.com/photo/2016/06/03/12/42/popcorn-1433327_1280.jpg'),
    lightgray 295.604px -4.18px / 92.376% 104.171% no-repeat;
  background-size: cover;
  background-position: center bottom;
  padding: 100px;
`;

export const HeroText = styled.div`
  color: #e8eced;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2),
    -2px -2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  margin-bottom: 10px;
  max-width: 600px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
