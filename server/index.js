const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());

// all routers
const apiRouter = require("./routes/api");

// mount point for routers
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
