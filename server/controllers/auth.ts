import { prisma } from "..";
import { NextFunction, Request, Response } from "express";
import { compareSync, hashSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequest } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;
  let user = await prisma.user.findFirst({
    where: { email },
  });
  if (user) {
    next(new BadRequest("user already exists", ErrorCode.USER_ALREADY_EXISTS));
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

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new BadRequest("user not found", ErrorCode.USER_NOT_FOUND);
    }
    if (!compareSync(password, user.password)) {
      throw new BadRequest("incorrect password", ErrorCode.INCORRECT_PASSWORD);
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
};
