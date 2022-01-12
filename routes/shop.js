const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop/product-list", { pageTitle: "Product List", path: "/" });
});

module.exports = router;
