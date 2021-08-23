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
  if (username === 'system' && password === 'admin') {
    setAuth();
    return Promise.resolve();
  } else return Promise.reject();
}

function logout() {
  clearAuth();
}
