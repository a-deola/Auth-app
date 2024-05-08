import { prisma } from "..";
import { NextFunction, Request, Response } from "express";
import { compareSync, hashSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequest } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { SignUpSchema } from "../schemas/user";
import { NotFoundException } from "../exceptions/not-found";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  SignUpSchema.parse(req.body);
  const { username, email, password } = req.body;

  let user = await prisma.user.findFirst({
    where: { email },
  });
  if (user) {
    new BadRequest("user already exists", ErrorCode.USER_ALREADY_EXISTS);
  } else {
    user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashSync(password, 10),
      },
    });
    res.status(201).json(user);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: { email },
  });
  if (!user) {
    throw new NotFoundException("user not found", ErrorCode.USER_NOT_FOUND);
  }
  if (!compareSync(password, user.password)) {
    throw new BadRequest("incorrect password", ErrorCode.INCORRECT_PASSWORD);
  }
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.status(200).json({ user, token });
};
