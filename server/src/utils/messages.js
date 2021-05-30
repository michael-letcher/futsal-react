export const bodyMissing = res => {
  if (!res) {
    throw Error('Missing resposne object');
  }

  res.status(400).send('Request body is missing');
};
