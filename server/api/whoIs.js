const axios = require('axios');

const API_KEY = process.env.WHOIS_KEY;

const WHOIS = axios.create({
  baseURL: 'https://www.whoisxmlapi.com/whoisserver/WhoisService',
  params: {
    apiKey: API_KEY,
    outputFormat: 'JSON',
  },
});

module.exports = WHOIS;
