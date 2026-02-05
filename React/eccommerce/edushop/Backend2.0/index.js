const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
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
  const findProduct = productDat.find((el) => el.id == req.params.id);
  if (!findProduct) {
    return res.status(404).json({
      status: "Fail",
      message: "Product not found check your id",
    });
  }
  res.status(200).json({
    Status: "success",
    data: findProduct,
  });
});

app.post("/api/v1/products", (req, res) => {
  console.log(req.body);

  const newId = productDat.length + 1;
  const newProduct = Object.assign({ id: newId }, req.body);
  productDat.push(newProduct);
  fs.writeFile("./a.json", JSON.stringify(productDat), (err) => {
    if (err) {
      res.status(400).json({
        status: "fail",
        message: "Product not added",
        err: err,
      });
    }
    res.status(201).json({
      status: "success",
      data: newProduct,
    });
  });
});

app.listen(9000, () => {
  console.log("Server started on port no 9000");
});