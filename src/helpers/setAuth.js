import store from '../store';

function setAuth() {
  localStorage.setItem('isAuthenticated', true);
  store.dispatch({ type: 'SIGN_IN' });
}

export default setAuth;
