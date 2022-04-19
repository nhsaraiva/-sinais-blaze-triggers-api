import express from "express";
import dotenv from 'dotenv';
import routes from "./shared/http/routes/routes";
import { errors } from "celebrate";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(routes);

app.use(errors());

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });