const express = require("express");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const port = process.env.PORT || 5000;
const app = express();

// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(shopRouter);
app.use("/admin", adminRouter);

// Fallback route or 404 handler
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Not Found!" });
});

app.listen(port, () => console.log(`Listening on ${port}`));
