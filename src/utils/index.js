import Payment from "payment";
import * as yup from "yup";
import currency from 'currency.js';

const ValidationSchema = yup.object().shape({
  number: yup
    .string()
    .test("number", "", (value) => Payment.fns.validateCardNumber(value))
    .required(),
  name: yup
    .string()
    .required(),
  expiry: yup
    .string()
    .test("expiry", "", (value) => Payment.fns.validateCardExpiry(value))
    .required(),
  cvc: yup
    .string()
    .test("cvc", "", (value) => Payment.fns.validateCardCVC(value))
    .required(),
});

const FormatCardNumber = (field)  => Payment.formatCardNumber(field);
const FormatCardExpiry = (field)  => Payment.formatCardExpiry(field);
const FormatCardCVC    = (field)  => Payment.formatCardCVC(field);
const FormatCurrency   = (value)  => currency(value, { symbol: "R$ ", separator: ".", decimal: "," }).format();

export { ValidationSchema, FormatCardCVC, FormatCardNumber, FormatCardExpiry, FormatCurrency };
