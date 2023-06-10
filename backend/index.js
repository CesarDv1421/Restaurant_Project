import "dotenv/config"
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

//Routes
import menu from "./routes/menu.routes.js";
import auth from "./routes/auth.routes.js";


app.use('/', menu)
app.use('/auth', auth)


app.listen(3000, () => console.log("Listen in PORT 3000"));
