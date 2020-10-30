import styled from "styled-components";

const Loading = styled.div`
  display: block;
  margin: 16px auto;
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #ff7800;
  border-bottom: 4px solid #ff7800;
  border-left: 4px solid #ff7800;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
