import React, { Fragment } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { Purchase, Products } from "../components";
import {
  GridItem,
  Container,
  Title,
  Message,
  Box,
  Image,
  CardInfo,
} from "../styles";

function Success({ purchase, location }) {
  const { card } = location.state;

  return (
    <Fragment>
      {!purchase.products && <Redirect to="/" />}
      {purchase.products && (
        <Fragment>
          <GridItem area="message" padding={16}>
            <Image
              width={40}
              height={40}
              src="/images/success.png"
              alt="Compra efetuada"
            />
            <Message
              color="#FF7800"
              fontSize={14}
              fontWeight="bold"
              textAlign="center"
              margin="10px 0 0"
            >
              Compra efetuada com sucesso
            </Message>
          </GridItem>
          <GridItem area="details" padding={16}>
            <Container maxWidth={750} margin="auto 0 auto auto">
              <Title>Pagamento</Title>
              {card && (
                <Box type="solid" margin="auto auto 10px">
                  <CardInfo>
                    <p>{card.number.replace(/.(?=.{4,}$)/g, "*")}</p>
                    <p>{card.name}</p>
                    <p>{card.expiry}</p>
                  </CardInfo>
                </Box>
              )}
              <Title>Produtos</Title>
              <Products items={purchase.products} />
            </Container>
          </GridItem>
          <GridItem area="price" padding={16}>
            <Container maxWidth={340}>
              <Purchase info={purchase.info} />
            </Container>
          </GridItem>
        </Fragment>
      )}
    </Fragment>
  );
}

export default withRouter(Success);
