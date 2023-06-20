import { Router } from "express";
import jwt from "jsonwebtoken";
import encrypt from "../helpers/bcrypt.js";
import { body, validationResult } from "express-validator";
const auth = Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

auth.post(
  "/signin",
  [
    body("email")
      .notEmpty()
      .withMessage("Ingrese un email")
      .isEmail()
      .withMessage("El correo electrónico no es válido"),

    // body("password")
    //   .isLength({ min: 8 })
    //   .isStrongPassword()
    //   .withMessage(
    //     "La contraseña debe tener al menos 1 caracter especial, 1 mayúscula y 8 caracteres"
    //   ),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ err: errors.array()[0].msg });

    try {
      const { email, password } = req.body;

      const userExist = await prisma.clientes.findFirst({
        select: {
          name: true,
          email: true,
          password: true,
          roles: { select: { rol: true } },
        },
        where: { email },
      });

      if (!userExist)
        return res.status(404).json({ err: "Usuario no encontrado" });

      const comparePassword = await encrypt.matchPassword(
        password,
        userExist.password
      );

      if (!comparePassword)
        return res.status(404).json({ err: "Contraseña incorrecta" });

      const token = jwt.sign({ id: userExist.id }, process.env.SECRET_JWT, {
        expiresIn: "6h",
      });

      return res
        .status(201)
        .json({ token, userName: userExist.name, rol: userExist.roles.rol });
    } catch (err) {
      res.status(500).json({ err });
    }
  }
);

auth.post(
  "/signup",
  [
    body("name")
      .notEmpty()
      .withMessage("El nombre es obligatorio")
      .isEmail()
      .withMessage("El correo electrónico no es válido"),

    //Validación de campo 'password'
    body("password")
      .isLength({ min: 8 })
      .withMessage("La contraseña debe contener al menos 8 caracteres")
      .isStrongPassword()
      .withMessage(
        "La contraseña debe contener al menos 1 caracter especial, 1 mayúscula y 8 caracteres"
      ),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ err: errors.array()[0].msg });

    try {
      const { name, email, password } = req.body;

      const userExist = await prisma.clientes.findFirst({ where: { email } });

      if (userExist) {
        return res.status(404).json({ err: "El usuario ya existe" });
      }

      const encriptedPassword = await encrypt.encryptPassword(password);

      const user = await prisma.clientes.create({
        data: { name, email, password: encriptedPassword, id_rol: 1 },
        include: { roles: true },
      });

      const token = jwt.sign({ userId: user.id }, process.env.SECRET_JWT, {
        expiresIn: "5h",
      });

      res.status(201).json({ token, userName: user.name, rol: user.roles.rol });
    } catch (err) {
      console.log(err);
    }
  }
);

export default auth;
