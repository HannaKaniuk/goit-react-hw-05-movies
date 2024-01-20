import { List, AdditionalWrp, LinkInfo, LineDiv } from './Aditional.styled';

export const AdditionalInfo = () => {
  return (
    <AdditionalWrp>
      <LineDiv>
        <h3>Additional information</h3>
        <List>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </List>
      </LineDiv>
    </AdditionalWrp>
  );
};
