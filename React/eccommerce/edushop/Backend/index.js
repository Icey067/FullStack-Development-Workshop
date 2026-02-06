const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
});

const productDat = JSON.parse(fs.readFileSync("./a.json", "utf-8"));

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "Success",
    length: productDat.length,
    timeofHit: req.requestTimeOfHit,
    data: productDat,
  });
};

const getProduct = (req, res) => {
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
};

const createProduct = (req, res) => {
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
};

const updateProduct = (req, res) => {
  const findProduct = productDat.find((el) => el.id == req.params.id);
  if (!findProduct) {
    return res.status(404).json({
      status: "Fail",
      message: "Product not found check your id",
    });
  }
  res.status(200).json({
    status: "Success",
    message: "Data updated succesfully",
  });
};

const deletProduct = (req, res) => {
  const findProduct = productDat.find((el) => el.id == req.params.id);
  if (!findProduct) {
    return res.status(404).json({
      status: "Fail",
      message: "Product not found check your id",
    });
  }
  res.status(204).json({
    status: "deleted",
  });
};

const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter.route("/:id").get(getProduct).put(updateProduct).delete(deletProduct);

// app.get("/api/v1/products", getAllProducts);
// app.get("/api/v1/products/:id", getProduct);
// app.post("/api/v1/products", createProduct);
// app.put("/api/v1/products/:id", updateProduct);
// app.delete("/api/v1/products/:id", deletProduct);

app.use("/api/v1/products",productRouter)
app.listen(9000, () => {
  console.log("Server started on port no 9000");
});