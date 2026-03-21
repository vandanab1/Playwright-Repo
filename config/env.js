const ENV = process.env.ENV || 'dev';

const URLS = {
  dev: 'https://www.saucedemo.com/',
  staging: 'https://www.saucedemo.com/',
  prod: 'https://www.saucedemo.com/',
};

export default {
  use: {
    baseURL: process.env.BASE_URL || URLS[ENV],
  },
};