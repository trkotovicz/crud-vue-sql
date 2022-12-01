import axios from 'axios';

const api = axios.create({
  baseURL: `127.0.0.1:${process.env.APP_PORT || '3001'}`,
  timeout: 10000,
});

// const api = axios.create({
//   baseURL: `http://localhost:${process.env.APP_PORT || '3001'}`,
//   timeout: 10000,
// });

// --------------------------------------------------------------
// USERS REQUESTS

export const userToken = (parameter) => {
  api.defaults.headers.common.Authorization = parameter;
};

export const login = async (body) => {
  try {
    const { data } = await api.post('/login', body);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const userRegister = async (body) => {
  try {
    const { data } = await api.post('/register', body);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// --------------------------------------------------------------
// CLIENTS REQUESTS

const CLIENTS_URL = '/clients';

export const getAllClients = async () => {
  try {
    const { data } = await api.get(CLIENTS_URL);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getClientById = async (id) => {
  try {
    const { data } = await api.get(`${CLIENTS_URL}/${id}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateClient = async (id, body) => {
  try {
    const { data } = await api.patch(`${CLIENTS_URL}/${id}`, body);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteClient = async (id) => {
  try {
    const { data } = await api.delete(`${CLIENTS_URL}/${id}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const createClient = async (body) => {
  try {
    const { data } = await api.post(CLIENTS_URL, body);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
