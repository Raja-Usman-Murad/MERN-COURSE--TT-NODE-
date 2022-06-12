const dotenv = require("dotenv"); //env
dotenv.config({ path: "./config.env" }); //env
const express = require("express"); //express
const app = express(); //express
const cookieParser = require("cookie-parser"); // token parser
require("./db/conn"); //DATABASE
app.use(express.json()); //its for only postman
app.use(cookieParser());

app.use(express.urlencoded({ extended: false })); //its when we send data from frontend
app.use(require("./router/auth")); // router
const PORT = process.env.PORT; //port

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
