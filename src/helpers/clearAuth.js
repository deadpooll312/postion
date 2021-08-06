import store from '../store';

function clearAuth() {
  localStorage.removeItem('isAuthenticated');
  store.dispatch({ type: 'SIGN_OUT' });
}

export default clearAuth;
