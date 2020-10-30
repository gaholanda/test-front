import React from "react";

import { Currency } from "../components";
import { Box, ListCSS, Image } from "../styles";

function Products({ items }) {
  const { List, ListItem, ItemContent, ItemDescription, ItemPrice } = ListCSS;
  return (
    <Box type="solid">
      <List>
        {items.map(({ product }) => (
          <ListItem key={product.sku} type="cart">
            <Image
              src={product.imageObjects[0].small}
              width={65}
              height={65}
              margin="auto 15px auto auto"
            />
            <ItemContent>
              <ItemDescription type="cart">{product.name}</ItemDescription>
              <ItemPrice type="cart">
                <Currency value={product.priceSpecification.price} />
              </ItemPrice>
            </ItemContent>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Products;
