const express = require("express");
const empRoutes = require("./routes/empRoute");
const connectDB = require("./db/db");

const app = express();


connectDB();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", empRoutes);

app.listen(4000, () => {
  console.log("Server running....");
});
