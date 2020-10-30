import React, { Fragment } from "react";

import { Products, Purchase } from "../components";
import { GridItem, Container, Title, Button } from "../styles";

function Cart({ purchase }) {
  return (
    <Fragment>
      <GridItem area="details" padding={16}>
        {purchase.products && (
          <Container maxWidth={750} margin="auto 0 auto auto">
            <Title>Produtos</Title>
            <Products items={purchase.products} />
          </Container>
        )}
      </GridItem>
      <GridItem area="price" padding={16}>
        {purchase.products && (
          <Container maxWidth={340}>
            <Purchase info={purchase.info} />
            <Button data-testid="toPayment" to="/payment">
              Seguir para o pagamento
            </Button>
          </Container>
        )}
      </GridItem>
    </Fragment>
  );
}

export default Cart;
