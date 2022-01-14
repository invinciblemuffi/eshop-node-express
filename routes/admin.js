const express = require("express");
const {
  getAddProduct,
  postAddProduct,
  getAdminProducts,
} = require("../controllers/admin");

const router = express.Router();

// /admin/add-product
router.get("/add-product", getAddProduct);

// /admin/products
router.get("/products", getAdminProducts);

// /admin/addProduct
router.post("/addProduct", postAddProduct);

module.exports = router;
