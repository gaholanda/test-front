import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 6vh auto auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "tabs"
    "message"
    "details"
    "price";

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "tabs tabs"
      "message message"
      "details price";
  }
`;

export default Grid;
