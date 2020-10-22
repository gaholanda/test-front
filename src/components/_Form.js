import React, { useState } from "react";
import Card from "react-credit-cards";

import { Box, FormCSS } from "../styles";
import {
  formatCardNumber,
  formatCVC,
  formatExpirationDate,
  validateExpirationDate
} from "../utils";

function _Form({ setValidForm }) {
  const { FormGroup, Label, Input, Error } = FormCSS;
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvc: "", issuer: ""});

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setCard({ ...card, issuer: issuer });
    } else {
      setCard({ ...card, number: "invalid" });
    }
  };

  const handleChange = (target, name, format, validate) => {

    if (name === "expiry") {
      target.value = format(target.value);
      if(!validate(target.value)){
        setCard({ ...card, expiry: "invalid" })
      } else {
        setCard({ ...card, expiry: target.value })
      }
    }

    if (name === "cvc") {
      target.value = format(target.value);
      if(target.value === ""){
        setCard({ ...card, [name]: "empty" });
      } else {
        setCard({ ...card, [name]: target.value });
      }
    }

    if (name === "number") {
      target.value = format(target.value);
      setCard({ ...card, [name]: target.value });
    }

    if (name === "name") {
      if(target.value === ""){
        setCard({ ...card, [name]: "empty" });
      } else {
        setCard({ ...card, [name]: target.value });
      }
    }

    formIsValid();

  }

  const formIsValid = () => {
    const invalid = Object.keys(card).filter(key => card[key] === "invalid" || card[key] === "empty" || card[key] === "");
    if(invalid.length === 0){
      setValidForm(card);
    } else {
      setValidForm(false);
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
          onChange={({ target }) => handleChange(target, target.name, formatCardNumber)}
          error={card.number === "invalid" ? true : false}
        />
        {card.number === "invalid" && <Error>Cartão inválido</Error>}
        <div style={{ display: 'none' }}>
          <Card number={card.number} name={card.name} expiry={card.expiry} cvc={card.cvc} callback={handleCallback} />
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
          onChange={({ target }) => handleChange(target, target.name)}
        />
      </FormGroup>
      <FormGroup type="flex">
        <FormGroup margin="auto 5px auto auto">
          <Label>Validade(mês/ano):</Label>
          <Input
            type="tel"
            name="expiry"
            className="form-control"
            placeholder="__/__"
            pattern="\d\d/\d\d"
            required
            onChange={({ target }) => handleChange(target, target.name, formatExpirationDate, validateExpirationDate)}
            maxLength={5}
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
            onChange={({ target }) => handleChange(target, target.name, formatCVC)}
            maxLength={4}
          />
        </FormGroup>
      </FormGroup>
    </Box>
  );
}

export default _Form;
