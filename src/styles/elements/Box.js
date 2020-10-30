import styled, { css } from "styled-components";

const Box = styled.div`
  ${({ type, margin }) =>
    type === "solid"
      ? css`
          display: block;
          margin: ${margin ? margin : "auto"};
          padding: 12px;
          background: white;
          box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
          border-radius: 3px;
        `
      : css`
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
          @media (min-width: 768px) {
            margin-top: 0;
          }
        `}
`;

export default Box;
