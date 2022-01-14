exports.getProducts = (req, res) => {
  res.render("shop/product-list", {
    pageTitle: "All Products",
    path: "/products",
  });
};

exports.getIndex = (req, res) => {
  res.render("shop/index", { pageTitle: "Shop", path: "/" });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { pageTitle: "Your Cart", path: "/cart" });
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};
