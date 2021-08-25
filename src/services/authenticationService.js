import client from '../helpers/client';
import clearAuth from '../helpers/clearAuth';

export const authenticationService = {
  login,
  logout,
};

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

function login(username, password) {
  return client.post('auth', {},  {
    headers,
    auth: {
      username,
      password
    }
  });
}

function logout() {
  clearAuth();
}
