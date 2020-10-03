import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 769px){
    flex: 1;
    margin-right: 10px;
  }
`;

export const List = styled.ul`
  padding: 12px;
  background: white;
  box-shadow:  1px 1px 5px 0 rgba(0,0,29,0.22);
  border-radius: 3px;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  border: 1px solid #EEE;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 15px;

  &:last-child{
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 16px;
`;

export const Price = styled.p`
  margin-top: 15px;
  font-weight: bold;
  text-align: right;
  font-size: 14px;
`;

export default {
  Container,
  List,
  Product,
  Image,
  Info,
  Description,
  Price
}