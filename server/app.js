import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from 'morgan';
import sourcesRouter from './routes/sources';
import feedRouter from './routes/feed';

dotenv.config();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/sources', sourcesRouter);
app.use('/feed', feedRouter);

export default app;
