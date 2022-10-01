import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import morgan from "morgan";
import { create } from "express-handlebars";

const hbs = create({ extname: ".hbs" });

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

// template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log("LISTENING SUCCESSFUL");
});
