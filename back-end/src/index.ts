import express, { Request, Response } from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import http from "http";
import { ROUTES } from "../../common/constants/routePaths";  

import getAllArticlesRouter from "./routes/articles/getAllArticles";
import getArticleRouter from "./routes/articles/getArticle";
import getThreeArticles from './routes/articles/getThreeArticles';

import createUserRouter from "./routes/users/createUser"
import authenticateUser from './routes/users/authenticateUser';
import checkExistence from './routes/users/checkExistence';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use(ROUTES.api.articles.getAllArticles, getAllArticlesRouter);
app.use(ROUTES.api.articles.getArticle, getArticleRouter);
app.use(ROUTES.api.articles.getThreeArticles, getThreeArticles);

app.use(ROUTES.api.users.createUser, createUserRouter);
app.use(ROUTES.api.users.authenticateUser, authenticateUser);
app.use(ROUTES.api.users.checkExistence, checkExistence);

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

export default httpServer;