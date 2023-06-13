import "dotenv/config"
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

//Routes
import menu from "./routes/menu.routes.js";
import auth from "./routes/auth.routes.js";
import isAuthenticated from "./middleware/isAuthenticated.js"


app.use('/auth', auth)
app.use(isAuthenticated)
app.use('/', menu)


app.listen(3000, () => console.log("Listen in PORT 3000"));
