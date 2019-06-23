const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://dev:dev@devcluster-cut7d.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

require("./models/User");

app.use("/api", require("./routes"));

app.listen(9999);
