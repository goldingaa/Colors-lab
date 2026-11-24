const axios = require('axios');

const API_URL = 'http://localhost/API/';

describe('PHP API Integration Tests', () => {

  test('Login API should return expected JSON structure', async () => {
    const response = await axios.post(
      API_URL + 'Login.php',
      {
        login: 'testuser',
        password: 'testpassword'
      }
    );

    expect(response.status).toBe(200);

    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('firstName');
    expect(response.data).toHaveProperty('lastName');
    expect(response.data).toHaveProperty('error');
  });

});