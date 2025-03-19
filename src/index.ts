import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/message", (req: Request, res: Response) => {
    res.json({"mensagem":"O Projeto começou! 🚀"})
  });

  app.listen(3000, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`)
  });
