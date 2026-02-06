const express = require("express");
const fs = require("fs");
const productRouter = require("./Routes/productRoutes")
const cors = require("cors")

const app = express();
app.use(express.json());

app.use(cors())

app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
});


app.use("/api/v1/products", productRouter)

app.listen(9000, () => {
  console.log("Server started on port no 9000");
});