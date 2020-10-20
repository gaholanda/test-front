import React from "react";

import { Box, ListCSS } from '../styles';
import { Currency } from '../components';

function Purchase({ info }) {
  const { List, ListItem, ItemDescription, ItemPrice } = ListCSS;
  return (
    <Box>
      <List>
        <ListItem>
          <ItemDescription>PRODUTOS</ItemDescription>
          <ItemPrice><Currency value={info.subTotal}/></ItemPrice>
        </ListItem>
        <ListItem>
          <ItemDescription>FRETE</ItemDescription>
          <ItemPrice><Currency value={info.shippingTotal} /></ItemPrice>
        </ListItem>
        <ListItem fontColor="#FF7800">
          <ItemDescription>DESCONTO</ItemDescription>
          <ItemPrice>- <Currency value={info.discount}/></ItemPrice>
        </ListItem>
        <ListItem>
          <ItemDescription>TOTAL</ItemDescription>
          <ItemPrice><Currency value={info.total} /></ItemPrice>
        </ListItem>
      </List>
    </Box>
  );
}

export default Purchase;
