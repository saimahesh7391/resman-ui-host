// File: src/lib/apiClient.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://ec2-13-211-19-159.ap-southeast-2.compute.amazonaws.com:9092',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
