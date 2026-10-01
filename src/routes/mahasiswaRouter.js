const express = require("express");
const router = express.Router();
const { gate, getAllData } = require("../controller/mahasiswaController");

router.get("/", gate);
router.use("/mahasiswa", getAllData);

module.exports = router;
