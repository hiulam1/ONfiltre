import { NextFunction, Request, Response } from "express";

export const catchErrors =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
