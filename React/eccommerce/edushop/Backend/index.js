const express = require("express");
const fs = require("fs");

const app = express();
// C:  Create (Post)
// R: Read(Get)
// U: Update(Put & Patch)
//  D: Delete
const productDat = JSON.parse(fs.readFileSync("./a.json", "utf-8"));

app.get("/api/v1/products", (req, res) => {
  res.status(200).json({
    status: "Success",
    length: productDat.length,
    data: productDat,
  });
});

app.get("/api/v1/products/:id", (req, res) => {
  const findProduct = productDat.find((product) => product.id === req.params.id);  
  if (!findProduct){
    return res.status(404).json({
      status: "Failed",
      message: "Product not found",
    });
  }
  res.status(200).json({
    status: "Success",
    data: findProduct, 
  });
});

app.listen(9000, () => {
  console.log("Server started on port no 9000");
});