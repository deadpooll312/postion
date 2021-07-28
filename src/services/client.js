import axios from 'axios';
import getBaseUrl from '../helpers/getBaseUrl';
const https = require('https');

const baseURL = getBaseUrl();

const client = axios.create({
  baseURL,
  //   httpsAgent: new https.Agent({
  //     rejectUnauthorized: false,
  //   }),
});

export default client;
