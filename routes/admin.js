const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Add a Product" });
});

module.exports = router;
