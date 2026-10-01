const express = require("express");
const app = express();
const mahasiswaRouter = require("./routes/mahasiswaRouter");

app.use(express.json());

app.get("/", mahasiswaRouter);
app.get("/mahasiswa", mahasiswaRouter);

module.exports = app;
