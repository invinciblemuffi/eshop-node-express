const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);

router.post("/addProduct", productsController.postAddProduct);

module.exports = router;
