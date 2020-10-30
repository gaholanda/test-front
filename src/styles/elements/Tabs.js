import styled from "styled-components";

const Container = styled.div`
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  height: 100%;
`;

const Content = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  height: 100%;
  max-width: 360px;
  margin: auto;
`;

const Item = styled.li`
  list-style: none;
  font-weight: bold;
  font-size: 13px;
  color: ${({ active }) => (active ? "#FF7800" : "#CCC")};
  line-height: 16px;
  text-transform: uppercase;
`;

export default {
  Container,
  Content,
  Item,
};
