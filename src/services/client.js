import axios from 'axios';
import getBaseUrl from '../helpers/getBaseUrl';

const baseURL = getBaseUrl();

const client = axios.create({
  // baseURL,
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: true,
  // }),
});

export default client;
