const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://dev:dev@devcluster-cut7d.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.use("/api", require("./routes"));

app.listen(9999);
