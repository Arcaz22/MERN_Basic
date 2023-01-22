const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

// Create -> POST
router.post("/product", productsController.createProduct);

// Read -> GET
router.get("/products", productsController.getAllProducts);

module.exports = router;
