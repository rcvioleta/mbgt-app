import express, { Express, Request, Response } from "express";

import { authMiddleware } from "./middlewares/auth";
import routes from "./routes";

const app: Express = express();

app.use(authMiddleware);

app.use(express.json());
app.use(routes);

app.use("*", (_req: Request, res: Response) => {
  res.status(404).send("Route not found 404");
});

export default app;
