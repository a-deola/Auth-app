import express, { Express } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { errorMiddleware } from "./middlewares/errors";

const app: Express = express();
export const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
app.use("/api", rootRouter);
app.use(errorMiddleware);

app.listen(PORT, () => console.log("Server running on port: " + PORT));
