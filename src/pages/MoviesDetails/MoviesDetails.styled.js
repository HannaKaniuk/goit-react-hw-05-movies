import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #f2f2f2;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImgWrp = styled.div`
  display: flex;
  justify-content: center;
  background: #f2f2f2;
`;

export const InfoWrp = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
  flex-direction: column;
  p {
    text-align: justify;
  }
`;

export const ListGenres = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const BackDiv = styled.div`
  background: #f2f2f2;
  padding-top: 15px;
  padding-left: 15px;
`;

export const Img = styled.img`
  padding: 15px;
  width: 350px;
  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;

export const LinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 6px;
  width: 100px;
  background-color: #ddd;
  padding: 5px 15px 5px 15px;
  border: 1px solid #aaa;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  &:hover {
    background-color: #ccc;
  }
`;
