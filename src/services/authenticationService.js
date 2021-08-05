import axios from 'axios';

export const authenticationService = {
  login,
  logout,
};

function login(username, password) {
  return axios.post('/auth', {
    auth: {
      username,
      password,
    },
  });
}

function logout() {
  return axios.post('/logout');
}
