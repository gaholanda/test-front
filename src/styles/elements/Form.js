import styled, { css } from "styled-components";

const FormGroup = styled.div`
  width: 100%;
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : "auto")};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  ${({ type }) =>
    type === "flex"
      ? css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `
      : css`
          display: block;
          margin-bottom: 25px;
        `}
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  color: #ccc;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 13px;
  border-radius: 3px;
  background: white;
  border: ${({ error }) => (error ? "1px solid #F30" : "1px solid #e7e7e7")};
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  color: #212121;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;

  &:focus {
    border: 1px solid #a43287;
    outline: none;
  }

  &::placeholder {
    color: #e0e7ee;
  }
`;

const Error = styled.p`
  position: absolute;
  margin-top: 3px;
  font-size: 12px;
  color: #f30;
`;

export default {
  FormGroup,
  Label,
  Input,
  Error,
};
