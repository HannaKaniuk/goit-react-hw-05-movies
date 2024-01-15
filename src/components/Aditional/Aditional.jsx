import { useLocation } from 'react-router-dom';
import { List, AdditionalWrp, LinkInfo, LineDiv } from './Aditional.styled';

export const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <AdditionalWrp>
      <LineDiv>
        <h3>Additional information</h3>
        <List>
          <li>
            <LinkInfo to="cast" state={{ from: location }}>
              Cast
            </LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews" state={{ from: location }}>
              Reviews
            </LinkInfo>
          </li>
        </List>
      </LineDiv>
    </AdditionalWrp>
  );
};
