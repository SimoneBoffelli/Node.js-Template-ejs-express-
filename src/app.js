
import dotenv from "dotenv";// selezione env file
dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev' });
console.log("ENV FILE LETTO:", process.env.DB_USER);

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import homeRoutes from "./routes/homeRoutes.js";
import dbRoutes from "./routes/dbRoutes.js";
import expressLayouts from "express-ejs-layouts";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Impostare motore view EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layout/main");

// Impostare static
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRoutes);
app.use("/", dbRoutes);

// start server
app.listen(process.env.PORT, () => {
  console.log(`Server avviato su porta ${process.env.PORT}`);
});
