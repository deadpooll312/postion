import axios from 'axios';
// import store from '../redux';
import getBaseUrl from '../helpers/getBaseUrl';

const url = getBaseUrl();

export const authenticationService = {
  login,
  logout,
};

function login(username, password) {
  return axios({
    method: 'post',
    url: url + '/auth',
    auth: {
      username,
      password,
    },
  }).then((response) => {
    // localStorage.setItem('token', response?.data?.access);
    // localStorage.setItem('refresh', response?.data?.refresh);
    // const userData = tokenParser(response?.data?.access);
    // localStorage.setItem('userId', userData?.user_id);
    // users.getUserById(userData?.user_id).then((response) => {
    //   localStorage.setItem('userData', JSON.stringify(response?.data));
    //   store.dispatch({ type: 'SAVE_USER_DATA', payload: response?.data });
    // });
    // if (userData) {
    //   store.dispatch({ type: 'SAVE_USER_ID', payload: userData?.user_id });
    // }
    // updateToken(response?.data?.access);
    // return { ...response.data, userId: userData?.user_id };
  });
}

function logout() {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('refresh');
  //   localStorage.removeItem('userId');
  //   store.dispatch({ type: 'SIGN_OUT' });
  //   store.dispatch({ type: 'CLEAR_DATA' });
}
