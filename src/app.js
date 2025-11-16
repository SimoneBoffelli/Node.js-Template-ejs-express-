import dotenv from "dotenv"; // selezione env file
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import homeRoutes from "./routes/homeRoutes.js";
import dbRoutes from "./routes/dbRoutes.js";
import expressLayouts from "express-ejs-layouts";
import LanguageService from "./services/LanguageService.js";
import { defaultLang } from "./lang/languagesRegistry.js";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev",
});
console.log("ENV FILE LETTO:", process.env.DB_USER);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Impostare motore view EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layout/main");
app.use(express.static(path.join(__dirname, "public")));

// multi-language
const langService = new LanguageService();

app.use((req, res, next) => {
  const lang = req.query.lang || defaultLang;

  langService.setLanguage(lang);

  res.locals.t = (path) => langService.t(path);
  res.locals.currentLang = lang;

  next();
});

// Routes
app.use("/", homeRoutes);
app.use("/", dbRoutes);

// start server
app.listen(process.env.PORT, () => {
  console.log(`Server avviato su porta ${process.env.PORT}`);
});
