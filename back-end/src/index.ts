import express, { Request, Response } from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import http from "http";

import getAllArticlesRouter from "./routes/articles/getAllArticles";
import getArticle from "./routes/articles/getArticle";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/get-all-articles", getAllArticlesRouter);
app.use("/get-article", getArticle);

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

export default httpServer;