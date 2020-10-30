import React, { Fragment } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Purchase, Form } from "../components";
import { GridItem, Container, Title, Button } from "../styles";

import { ValidationSchema } from "../utils";

function Payment({ purchase }) {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ValidationSchema),
  });

  const onSubmit = (data) => {
    purchase.card = data;
    history.push("/success");
  };

  return (
    <Fragment>
      {!purchase.info && <Redirect to="/" />}
      {purchase.info && (
        <GridItem area="details" padding={16} data-testid="payment-screen">
          <Container maxWidth={750} margin="auto 0 auto auto">
            <Title>Cartão de crédito</Title>
            <Form register={register} errors={errors} />
          </Container>
        </GridItem>
      )}
      {purchase.info && (
        <GridItem area="price" padding={16}>
          <Container maxWidth={340}>
            <Purchase info={purchase.info} />
            <Button onClick={handleSubmit(onSubmit)} to="/success">
              Finalizar o pedido
            </Button>
          </Container>
        </GridItem>
      )}
    </Fragment>
  );
}

export default Payment;
