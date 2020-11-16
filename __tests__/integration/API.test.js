import { GetPurchase } from '../../src/api';

describe('GET API info', () => {
  it('should return 200 and purchase object', async () => {
    const response = await GetPurchase();
    expect(response.status).toEqual(200);
    expect(response.data).toHaveProperty('items');
  })
})
