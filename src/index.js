import express from "express";
import path from "path";
import {
  fileURLToPath
} from "url";
import {
  dirname
} from "path";
import morgan from "morgan";
import cors from "cors"
import {
  create
} from "express-handlebars";
import route from "./routes/route/index.js";
import db from "./config/db/index.js"
import bodyParser from "body-parser"

db.connect();

const hbs = create({
  extname: ".hbs"
});
const __dirname = dirname(fileURLToPath(
  import.meta.url));
const app = express();
const port = 4000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors({origin : true}))
app.use(express.json());
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
  extended : true
}))



// app.engine("hbs", hbs.engine);
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "resource", "views"));

route(app);
// app.post('/login', urlencodedParser, function (req, res) {
//   res.send('welcome, ' + req.body.username)
// })

// app.post('/api/users', jsonParser, function (req, res) {
//   // create user in req.body
// })

app.listen(port, () => {
  console.log("LISTENING SUCCESSFUL");
});