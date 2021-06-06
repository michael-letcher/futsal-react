export const bodyMissing = (res, message) => {
  if (!res) {
    throw Error(message ? message : 'Missing resposne object');
  }

  res.status(400).send(message ? message : 'Request body is missing');
};
