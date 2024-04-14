import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());

async function main() {
  // ... you will write your Prisma Client queries here

  await prisma.user.create({
    data: {
      username: "Alice",
      email: "alice@prisma.io",
      password: "12345",
    },
  });
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// app.post("/api/user", (req: Request, res: Response) => {
//   const { username, email, password } = req.body;
//   pool
//     .query(
//       `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`
//     )
//     .then(() => {
//       res.json({ success: true, message: "User created" });
//       res.redirect("/success");
//     })
//     .catch((err) => res.status(500).json({ success: false, error: err }));
// });

app.listen(3000, () => console.log("Server running on port 3000"));
