import styled from 'styled-components';

const Container = styled.div`
  display: block;
  margin: ${({ margin }) => margin};

  @media(min-width: 768px){
    max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px`: 'auto'}
  }
`;

export default Container;