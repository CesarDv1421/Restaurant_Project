import { Router } from "express";
const app = Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
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
        JOIN category ON category.id = m.dishCategory_id;`;

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

    //Crea un objeto cuya clave es el nombre del plato y el valor los valores acumulados del mismo nombre del plato
    const reduceMenu = (allMenu) => {
      return allMenu.reduce((acc, curr) => {
        if (!acc[curr.name]) {
          //Si no existe el nombre del plato dentro del objeto, lo crea
          acc[curr.name] = {
            //El objeto va a ser igual a "Nombre del plato" : { ...resto de la informacion, valores acumulados o todas las variantes }
            ...curr,
            price: [curr.price],
            id: [curr.id],
            variantOrQuanty: [curr.variantOrQuanty],
          };
        } else {
          //Si ya existe el nombre, en el objeto, se agregan los valores name, id y variantOrQuanty dentro de un array
          acc[curr.name].price.push(curr.price);
          acc[curr.name].id.push(curr.id);
          acc[curr.name].variantOrQuanty.push(curr.variantOrQuanty);
        }
        return acc;
      }, {});
    };

    res.status(200).json({ menu : Object.values(reduceMenu(menu)), categories, variantMenu : Object.values(reduceMenu(variantMenu)) });
  } catch (err) {
    res.status(500).json({ err });
  }
});

export default app;
