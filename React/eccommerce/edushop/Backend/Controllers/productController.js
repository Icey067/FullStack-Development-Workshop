const fs = require('fs')

const productDat = JSON.parse(fs.readFileSync("./a.json", "utf-8"));

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "Success",
    length: productDat.length,
    timeofHit: req.requestTimeOfHit,
    data: productDat,
  });
};

exports.getProduct = (req, res) => {
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

exports.createProduct = (req, res) => {
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

exports.updateProduct = (req, res) => {
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

exports.deletProduct = (req, res) => {
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
