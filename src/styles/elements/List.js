import styled, { css } from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;

  ${({ fontColor }) =>
    fontColor &&
    css`
      color: ${fontColor};
    `
  }

  ${({ type }) =>
    type === 'cart' ?
    css`
      border: 1px solid #eee;
      border-radius: 3px;
      padding: 10px;
      margin-bottom: 15px;
    ` :
    css`
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
      text-transform: uppercase;
    `
  }

  &:last-child{
    margin-bottom: 0;
  }

`;

const ItemContent = styled.div`
  width: 100%;
`;

const ItemDescription = styled.p`
  color: inherit;
  ${({ type }) =>
    type === 'cart' ?
    css`
      max-width: 300px;
      font-size: 13px;
      line-height: 16px;
    ` :
    css`
      flex: 1;
      text-align: left;
    `
  }
`;

const ItemPrice = styled.p`
  color: inherit;
  ${({ type }) =>
    type === 'cart' ?
    css`
      margin-top: 15px;
      font-weight: bold;
      text-align: right;
      font-size: 14px;
    ` :
    css`
      flex: 1;
      text-align: right;
    `
  }
`;

export default {
  List,
  ListItem,
  ItemContent,
  ItemDescription,
  ItemPrice
};
