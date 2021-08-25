import client from '../helpers/client';

export const sendSos = (keeperId) => {
  return client.post(
    `/v0.1/tag_signal/${keeperId}`,
    {}
  );
};
