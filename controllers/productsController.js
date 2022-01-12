exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add a Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {
  console.log(req.body);
  res.redirect(302, "/");
};
