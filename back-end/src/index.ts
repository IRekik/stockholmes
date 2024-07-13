import express, { Request, Response } from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import http from "http";
import { ROUTES } from "../../common/routePaths";  

import getAllArticlesRouter from "./routes/articles/getAllArticles";
import getArticleRouter from "./routes/articles/getArticle";
import createUserRouter from "./routes/users/createUser"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use(ROUTES.api.articles.getAllArticles, getAllArticlesRouter);
app.use(ROUTES.api.articles.getArticle, getArticleRouter);

app.use(ROUTES.api.users.createUser, createUserRouter);

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

export default httpServer;