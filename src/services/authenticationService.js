import client from './client';

export const authenticationService = {
  login,
  logout,
  api,
};

function login(username, password) {
  return client
    .post('/auth', {
      auth: {
        username,
        password,
      },
    })
    .then((response) => {
      console.log('response', response);
      return response;
    });
}

function logout() {}

function api() {
  return client.get('/v0.1/maps').then((response) => {
    console.log('api', response);
  });
}
