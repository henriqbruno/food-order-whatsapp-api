import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get("/message", (req: Request, res: Response) => {
    res.json({"mensagem":"O Projeto começou! 🚀"})
  });

export { app };