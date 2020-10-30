import React from "react";

import { Box, FormCSS } from "../styles";
import {
  FormatCardCVC,
  FormatCardExpiry,
  FormatCardNumber
} from "../utils";

function _Form({ register, errors }) {

  const { FormGroup, Label, Input, Error } = FormCSS;

  return (
    <Box type="solid">
      <form>
        <FormGroup>
          <Label>Número do Cartão:</Label>
          <Input
            type="tel"
            name="number"
            ref={register}
            error={errors.number ? true : false}
            placeholder="____.____.____.____"
            onChange={({ target }) => FormatCardNumber(target)}
          />
          {errors.number && <Error>Cartão inválido</Error>}
        </FormGroup>
        <FormGroup>
          <Label>Nome do titular:</Label>
          <Input
            type="text"
            name="name"
            placeholder="Como no cartão"
            ref={register}
            error={errors.name ? true : false}
          />
          {errors.name && <Error>Informe o nome</Error>}
        </FormGroup>
        <FormGroup type="flex">
          <FormGroup margin="auto 5px auto auto">
            <Label>Validade(mês/ano):</Label>
            <Input
              type="tel"
              name="expiry"
              ref={register}
              placeholder="__/____"
              error={errors.expiry ? true : false}
              onChange={({ target }) => FormatCardExpiry(target)}
            />
            {errors.expiry && <Error>Data inválida</Error>}
          </FormGroup>
          <FormGroup margin="auto auto auto 5px">
            <Label>CVV:</Label>
            <Input
              type="tel"
              name="cvc"
              ref={register}
              error={errors.cvc ? true : false}
              onChange={({ target }) => FormatCardCVC(target)}
            />
            {errors.cvc && <Error>CVV Inválido</Error>}
          </FormGroup>
        </FormGroup>
      </form>
    </Box>
  );
}

export default _Form;
