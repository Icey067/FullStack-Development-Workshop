const express = require("express");

const productRouter = express.Router();
const productController = require("../Controllers/productController")

const {getAllProducts, getProduct, createProduct, updateProduct, deletProduct} = productController

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter.route("/:id").get(getProduct).put(updateProduct).delete(deletProduct)

module.exports = productRouter