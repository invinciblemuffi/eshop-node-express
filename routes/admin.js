const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Add a Product" });
});

router.post("/addProduct", (req, res) => {
  console.log(req.body.prodName);
  res.redirect(302, "/");
});

module.exports = router;
