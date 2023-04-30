import express, { Express } from "express";
import { index } from "../controllers/home-controller";

const home: Express = express();

home.use("/", index);

export default home;
