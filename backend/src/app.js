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

console.log("Server running at http://localhost:9999");

//File upload
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "../src/Pages/Main/Components/Assets");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

let upload = multer({ storage: storage }).single("file");

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});
