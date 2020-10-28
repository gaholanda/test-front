import React, { useState } from "react";
import Card from "react-credit-cards";

import { Box, FormCSS } from "../styles";
import {
  formatCardNumber,
  formatCVC,
  formatExpirationDate,
  validateExpirationDate
} from "../utils";

function _Form({ setValidCard }) {
  const { FormGroup, Label, Input, Error } = FormCSS;
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvc: "", issuer: ""});

  const validateCardNumber = ({ issuer }, isValid) => {
    if (isValid) {
      setCard({ ...card, issuer: issuer });
    } else {
      setCard({ ...card, number: "invalid" });
    }
  };

  const formatAndValidate = (target, name, format, validate) => {

    if(target.value.trim() === ""){
      setCard({ ...card, [name]: "empty" });
    } else {

      if(format){
        target.value = format(target.value);
      }

      setCard({ ...card, [name]: target.value });

      if(validate){
        if(!validate(target.value)){
          setCard({ ...card, [name]: "invalid" });
        }
      }

    }

  }

  const formIsValid = () => {
    const invalid = Object.keys(card).filter(key => card[key] === "invalid" || card[key] === "empty" || card[key] === "");
    if(invalid.length === 0){
      setValidCard(card);
    } else {
      setValidCard(false);
    }
  }

  return (
    <Box type="solid">
      <FormGroup>
        <Label>Número do cartão:</Label>
        <Input
          type="tel"
          name="number"
          className="form-control"
          placeholder="____.____.____.____"
          pattern="[\d| ]{16,22}"
          required
          onKeyUp={({ target }) => formatAndValidate(target, target.name, formatCardNumber)}
          onKeyDown={formIsValid}
          data-testid="credit-card"
          error={card.number === "invalid" ? true : false}
        />
        {card.number === "invalid" && <Error>Cartão inválido</Error>}
        <div style={{ display: 'none' }}>
          <Card number={card.number} name={card.name} expiry={card.expiry} cvc={card.cvc} callback={validateCardNumber} />
        </div>
      </FormGroup>
      <FormGroup>
        <Label>Nome do Titular:</Label>
        <Input
          type="text"
          name="name"
          className="form-control"
          placeholder="Como no cartão"
          required
          data-testid="name"
          onKeyUp={({ target }) => formatAndValidate(target, target.name)}
          onKeyDown={formIsValid}
        />
      </FormGroup>
      <FormGroup type="flex">
        <FormGroup margin="auto 5px auto auto">
          <Label>Validade(mês/ano):</Label>
          <Input
            type="tel"
            name="expiry"
            className="form-control"
            placeholder="__/____"
            pattern="\d\d/\d\d"
            required
            data-testid="expiry"
            onKeyUp={({ target }) => formatAndValidate(target, target.name, formatExpirationDate, validateExpirationDate)}
            onKeyDown={formIsValid}
            maxLength={7}
            error={card.expiry === "invalid" ? true : false}
          />
          {card.expiry === "invalid" && <Error>Data inválida</Error>}
        </FormGroup>
        <FormGroup margin="auto auto auto 5px">
          <Label>CVV:</Label>
          <Input
            type="tel"
            name="cvc"
            className="form-control"
            placeholder="____"
            pattern="\d{3,4}"
            required
            data-testid="cvc"
            onKeyUp={({ target }) => formatAndValidate(target, target.name, formatCVC)}
            onKeyDown={formIsValid}
            maxLength={4}
          />
        </FormGroup>
      </FormGroup>
    </Box>
  );
}

export default _Form;
