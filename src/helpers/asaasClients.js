const axios = require('axios');

const httpClient = axios.create({
  baseURL: 'https://sandbox.asaas.com',
  timeout: 10000,
  headers: {
    'Content-Type':'application/json',
    'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwMzY0OTg6OiRhYWNoX2JkNzRkNjk5LTg3ZTUtNGRhOC04OTJlLWI2Yzk1OTIyZGYzNQ==' }
});


module.exports = httpClient;
