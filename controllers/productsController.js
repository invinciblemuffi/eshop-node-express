exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", { pageTitle: "Add a Product" });
};

exports.postAddProduct = (req, res) => {
  console.log(req.body);
  res.redirect(302, "/");
};
