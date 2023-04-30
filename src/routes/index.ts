import express, { Express } from "express";
import home from "./home-routes";

const routes: Express = express();

routes.use(home);

export default routes;
