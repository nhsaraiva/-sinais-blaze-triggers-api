import express from "express";
import dotenv from 'dotenv';
import routes from "./shared/http/routes/routes";
import { errors } from "celebrate";
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });