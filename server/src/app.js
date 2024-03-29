import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { connect } from './db';
import { indexRouter } from './routes/index';
import { usersRouter } from './routes/users';
import { userRouter } from './routes/user';
import { leagueRouter } from './routes/league';
import { leaguesRouter } from './routes/leagues';
import { divisionRouter } from './routes/division';
import { divisionsRouter } from './routes/divisions';

const app = express();
connect();

// Middleware
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

const PATH = '/api';

// Routes
app.use(PATH, indexRouter);
app.use(PATH, usersRouter);
app.use(PATH, userRouter);
app.use(PATH, leaguesRouter);
app.use(PATH, leagueRouter);
app.use(PATH, divisionRouter);
app.use(PATH, divisionsRouter);

export default app;
