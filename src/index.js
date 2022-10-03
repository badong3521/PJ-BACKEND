import express from "express";
import path from "path";
import {
  fileURLToPath
} from "url";
import {
  dirname
} from "path";
import morgan from "morgan";
import {
  create
} from "express-handlebars";
import route from "./routes/route/index.js";
import db from "./config/db/index.js"

db.connect();

const hbs = create({
  extname: ".hbs"
});
const __dirname = dirname(fileURLToPath(
  import.meta.url));
const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));

route(app);

app.listen(port, () => {
  console.log("LISTENING SUCCESSFUL");
});