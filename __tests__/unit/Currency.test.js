import { FormatCurrency } from '../../src/utils';

describe('Formatting currency value', () => {
  it('should get a number and show it on brazil currency format', () =>{
    const number = 1123.55;
    const result = FormatCurrency(number);
    expect(result).toEqual('R$ 1.123,55');
  })
})