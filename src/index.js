import express from "express";
import morgan from "morgan";
import cors from "cors"
import routesAll from "./routes/index.js";
import db from "./config/db/index.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

const app = express();

dotenv.config()

//CONNECT DB MONGO
db.connect();


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors({
  origin: true
}))


app.use(cookieParser());

//CHECK OBJECT TO SEVER IS OBJECT JSON
app.use(express.json());

app.use(morgan("combined"));

//CHECK OBJECT TO SEVER IS OBJECT STRING OR ARRAY
app.use(express.urlencoded({
  extended: true
}))

//ROUTES
routesAll(app);

// SET HEADERS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.listen(process.env.PORT, () => {
  console.log("LISTENING SUCCESSFUL");
});