import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Purchase, Form } from '../components';
import { GridItem, Container, Title, Button } from '../styles';

function Payment({ purchase }) {

  const [validCard, setValidCard] = useState(false);

  return (
    <Fragment>
      {!purchase.info && <Redirect to="/" />}
      {
        purchase.info &&
        <GridItem area="details" padding={16} data-testid="payment-screen">
          <Container maxWidth={750} margin="auto 0 auto auto">
            <Title>Cartão de crédito</Title>
            <Form setValidCard={setValidCard}  />
          </Container>
        </GridItem>
      }
      {
        purchase.info &&
        <GridItem area="price" padding={16}>
          <Container maxWidth={340}>
            <Purchase info={purchase.info}/>
            <Button disabled={!validCard} to={{ pathname: '/success', state: { card:  validCard } }}>Finalizar o pedido</Button>
          </Container>

        </GridItem>
      }
    </Fragment>
  )
}

export default Payment;