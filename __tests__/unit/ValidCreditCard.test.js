import { ValidationSchema } from '../../src/utils';

describe('Check credit card info', () => {
  it('should valid credit card info', async () => {
    const result = await ValidationSchema.isValid({
      number: '4916903529881773',
      name: 'JOSE SILVA',
      expiry: '12/2028',
      cvc: '434'
    })
    expect(result).toEqual(true);
  })
})