import express, { Express, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import "dotenv/config";
const app: Express = express();

// CORS
const allowedOrigins = ["http://localhost:3000"];

const options: CorsOptions = {
  origin: allowedOrigins,
};

// root middleware
app.use(cors(options));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
// sample routes
import publicRoutes from "./app/routes/public.routes";
publicRoutes(app);
// ..
// ..

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h1>Express + TypeScript Server</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
