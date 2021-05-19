import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { indexRouter } from './routes/index';
import { usersRouter } from './routes/users';
import { userRouter } from './routes/user';
import { connect } from './db';

const app = express();
connect();

// Middleware
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

// Routes
app.use(indexRouter);
app.use(usersRouter);
app.use(userRouter);

export default app;
