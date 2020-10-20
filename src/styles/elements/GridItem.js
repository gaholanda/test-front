import styled, { css } from 'styled-components';

const GridItem = styled.div`
  grid-area: ${({ area }) => area};
  background: ${({ background }) => background ? background : 'inherit' };
  padding: ${({ padding }) => padding ? `${padding}px` : 0};
  ${({ position }) => position &&
    css`
      position: ${position};
      top: 0
    `
  }
`;

export default GridItem;