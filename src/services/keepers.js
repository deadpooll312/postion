import client from '../helpers/client';

const keepers = {
  get() {
    client.get(
      '/v0.1/keepers?embed=tag&filter=%5Bdeleted%3D%3Dfalse;name%3D@;type%3D%3DEMPLOYEE%5D&sort=name'
    );
  },
};

export default keepers;
