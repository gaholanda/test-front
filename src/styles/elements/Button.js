import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 340px;
  padding: 20px 0;
  border: none;
  border-radius: 3px;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;

  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
          background: #ccc;
          box-shadow: inset 0 -3px 0 0 #ccc, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
        `
      : css`
          background: #ff6c00;
          box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
        `}

  &:hover {
    background: ${({ disabled }) => (disabled ? "#CCC" : "#D45A00")};
  }
`;

export default Button;
