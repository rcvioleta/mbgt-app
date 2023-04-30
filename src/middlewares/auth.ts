import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

const whitelistedIPs = process.env.WHITELISTED_IPS?.split(",") ?? [];

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userip = req.ip;
  if (whitelistedIPs.includes(userip)) {
    console.log(`User with IP Address [${userip}] granted access`);
    next();
    return;
  }
  res.status(401).send("Unauthorized access!");
};
