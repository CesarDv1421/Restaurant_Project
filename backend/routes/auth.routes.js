import { Router } from "express";
import jwt from "jsonwebtoken";
import encrypt from "../helpers/bcrypt.js";
const auth = Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

auth.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await prisma.clientes.findFirst({ where: { email } });

    if (!userExist)
      return res.status(404).json({ err: "Usuario no encontrado" });

    const comparePassword = await encrypt.matchPassword(password, userExist.password);

    if (!comparePassword)
      return res.status(404).json({ err: "Contraseña incorrecta" });

    const token = jwt.sign({ id: userExist.id }, process.env.SECRET_JWT, {
      expiresIn: "30m",
    });

    return res.status(200).json({ token, userName: userExist.name });
  } catch (err) {
    res.status(500).json({ err });
  }
});

auth.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await prisma.clientes.findFirst({ where: { email } });

    if (userExist) {
      return res.status(404).json({ err: "El usuario ya existe" });
    }

    const encriptedPassword = await encrypt.encryptPassword(password);

    const user = await prisma.clientes.create({
      data: { name, email, password: encriptedPassword },
    });

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_JWT, {
      expiresIn: "5h",
    });

    res.status(200).json({ token, userName: user.name });
  } catch (err) {
    console.log(err);
  }
});

export default auth;
