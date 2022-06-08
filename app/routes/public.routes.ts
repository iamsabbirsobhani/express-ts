import { Application, Request, Response } from "express";
export = (app: Application) => {
  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).send("Hello world");
  });
};
