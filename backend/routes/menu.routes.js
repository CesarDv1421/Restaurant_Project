import { Router } from "express";
const app = Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  //const menu = await prisma.menu.findMany();

  try {
    const categories = await prisma.category.findMany();

    const menu = await prisma.$queryRaw`
      SELECT
  m.id,
  m.name,
  m.description,
  m.price,
  m.image,
  category.id AS id_category,
  (
    SELECT GROUP_CONCAT(i.ingrediente SEPARATOR ', ')
    FROM menu_ingredientes mi
    JOIN ingredientes i ON mi.id_ingredientes = i.id
    WHERE mi.id_menu = m.id
  ) AS ingredientes,
  (
    SELECT GROUP_CONCAT(e.extras SEPARATOR ', ')
    FROM menu_extras me
    JOIN extras e ON me.id_extra = e.id
    WHERE me.id_menu = m.id
  ) AS extras,
  (
    SELECT GROUP_CONCAT(me.price SEPARATOR ', ')
    FROM menu_extras me
    WHERE me.id_menu = m.id
  ) AS extras_price
FROM
  menu m
  JOIN category ON category.id = m.dishCategory_id;
`;

    const variantMenu = await prisma.$queryRaw`
      SELECT
        (@row_number := IF(@row_number = 0, (SELECT MAX(id) FROM menu), @row_number + 1)) AS id,
        VarianteDelMenu.platoVariante AS name,
        variantes.variante AS variantOrQuanty,
        description,
        image,
        price,
        category.id AS id_category
      FROM
        VarianteDelMenu
        JOIN VariantesDelMenu_Variantes ON VarianteDelMenu.id = VariantesDelMenu_Variantes.id_variantedelmenu
        JOIN Variantes ON Variantes.id = VariantesDelMenu_Variantes.id_variantes
        JOIN category ON category.id = VarianteDelMenu.id_category
      CROSS JOIN (SELECT @row_number := 0) AS dummy;
    `;

    //     const ingredientes = await prisma.$queryRaw`
    //     SELECT
    //     menu.id,
    //     menu.name,
    //     menu.description,
    //     menu.price,
    //     menu.image,
    //     GROUP_CONCAT(ingredientes.ingrediente SEPARATOR ', ') AS ingredientes
    // FROM
    //     menu
    //     JOIN menu_ingredientes ON menu.id = menu_ingredientes.id_menu
    //     JOIN ingredientes ON menu_ingredientes.id_ingredientes = ingredientes.id
    // GROUP BY
    //     menu.id;
    //     `;

    //     const extras = await prisma.$queryRaw`
    //     SELECT
    //     menu.id,
    //     menu.name,
    //     extras.extras,
    //     menu_extras.price
    //     FROM menu
    //     JOIN menu_extras ON menu.id = menu_extras.id_menu
    //     JOIN extras ON menu_extras.id_extra = extras.id;
    //     `;

    res.json({ menu, categories, variantMenu });
  } catch (err) {
    res.status(500).json({ err });
  }
});

app.post("/", async (req, res) => {
  res.json({ categories });
});

export default app;
