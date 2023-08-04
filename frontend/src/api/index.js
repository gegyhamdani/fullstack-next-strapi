import axios from 'axios';
import { apiUrl } from '@/helpers/config';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const api = axios.create({
  baseURL: apiUrl,
  headers,
  timeout: 60000,
});

export default api;
