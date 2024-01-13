import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
 
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(100vw - 65px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 40px;
  }
`;

export const Item = styled.li`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
  color: #89d0bc;
  background-color: #89d0bc;
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-align: center;
   margin-bottom: 10px;
@media screen and (min-width: 768px) {
   font-size: 24px;
  }
  }
`;
export const TextScore = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: black;
  text-align: center;
  margin-bottom: 10px;
  vertical-align: bottom;
  }
`;

export const TextInfo = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: black;
  text-align: center;
`;
