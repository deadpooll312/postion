import client from '../helpers/client';
import clearAuth from '../helpers/clearAuth';
import setAuth from '../helpers/setAuth';

export const authenticationService = {
  login,
  logout,
};

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

function login(username, password) {
  return client
    .post(
      '/auth',
      {},
      {
        auth: {
          username,
          password,
        },
      }
    )
    .then(() => {
      setAuth();
    });
}

function logout() {
  return client.post('/logout').then(() => {
    clearAuth();
  });
}
