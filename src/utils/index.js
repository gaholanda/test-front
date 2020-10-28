import Payment from 'payment';

const clearNumber = (number = "") => {
  return number.replace(/\D+/g, "");
}

export const formatCardNumber = (number) => {
  if(!number){
    return number;
  }

  const cardType = Payment.fns.cardType(number);
  const numberCleared = clearNumber(number);

  let formatNumber;
  switch (cardType) {
    case "amex":
      formatNumber = `${numberCleared.slice(0,4)} ${numberCleared.slice(4,10)} ${numberCleared.slice(10,15)}`
      break;
    case "dinersclub":
      formatNumber = `${numberCleared.slice(0,4)} ${numberCleared.slice(4,10)} ${numberCleared.slice(10,14)}`
      break;
    default:
      formatNumber = `${numberCleared.slice(0,4)} ${numberCleared.slice(4,8)} ${numberCleared.slice(8,12)} ${numberCleared.slice(12,19)}`;
      break;
  }

  return formatNumber.trim();
}

export const formatCVC = (number, prevNumber, allNumbers = {}) => {
  const numberCleared = clearNumber(number);
  let maxLength = 4;

  if(allNumbers.number){
    const cardType = Payment.fns.cardType(allNumbers.number);
    maxLength = cardType === "amex" ? 4 : 3;
  }

  return numberCleared.slice(0, maxLength);
}

export const formatExpirationDate = (date) => {
  const dateCleared = clearNumber(date);
  if(dateCleared.length >= 3){
    return `${dateCleared.slice(0, 2)}/${dateCleared.slice(2, 8)}`;
  }

  return dateCleared;
}


export const validateExpirationDate = (value) => {
  const date = value.split('/');
  if(parseInt(date[0]) >= 1 && parseInt(date[0]) <= 12 && parseInt(date[1]) > 2020){
    return true;
  }
  return false;
}