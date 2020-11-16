import React from "react";

import { FormatCurrency } from '../utils';

function Currency({ value }) {
  const money = FormatCurrency(value);
  return <span data-testid="currency">{money}</span>;
}

export default Currency;
