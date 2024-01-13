import { ThreeCircles } from 'react-loader-spinner';
import { Container } from './loader.styled';

export const Loader = () => {
  return (
    <Container>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#fff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
};
