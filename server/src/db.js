import { connect as dbConnect } from 'mongoose';

// const server = '';
// const database = '';
const user = 'dbAdmin';
const password = 'xUoMXbWoR1XuLSx2';

const serverUri = `mongodb+srv://${user}:${password}@cluster-0.zr9r3.mongodb.net/futsal?retryWrites=true&w=majority`;

export const connect = () => {
  dbConnect(serverUri);
  console.log('Connected to DB');
};
