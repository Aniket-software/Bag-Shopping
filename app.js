const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./configs/mongoose-connection")
const ownersRouter = require('./routes/ownersRouter')
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as view engine
app.set("view engine", "ejs");

// Routes
app.use("/owners" , ownersRouter)
app.use("/product" , productRouter)
app.use("/user" , userRouter)
app.listen(3000);
