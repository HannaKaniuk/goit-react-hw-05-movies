// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const AdditionalWrp = styled.div`
  background: #f2f2f2;
  padding: 10px 15px;
  h3 {
    margin-bottom: 15px;
    color: #333;
  }
`;

export const LineDiv = styled.div`
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
`;

export const LinkInfo = styled(Link)`
  display: block;
  background-color: #ddd;
  width: 100px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  padding: 5px 35px 5px 35px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  &:hover {
    background-color: #ccc;
  }
`;
