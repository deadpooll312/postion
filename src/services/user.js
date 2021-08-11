import client from '../helpers/client';

const user = {
  changePassword,
  getData,
};

function changePassword(login, body) {
  return client.patch(`/v0.1/users/${login}/pass`, body);
}

function getData(login) {
  return client.get(`/v0.1/users/${login}`);
}

export default user;
