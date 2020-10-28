import styled from 'styled-components';

const Image = styled.img`
  display: block;
  width: ${({ width }) => width ? `${width}px` : 'auto'};
  height: ${({ height }) => height ? `${height}px` : 'auto'};
  margin: ${({ margin }) => margin ? margin : 'auto'};
`;

export default Image;