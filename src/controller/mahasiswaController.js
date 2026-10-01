const db = require("../config/db");
const response = require("../utils/response");

const gate = (req, res) => {
  response(200, "API Ready", "Success", res);
};

const getAllData = (req, res) => {
  const sql = "SELECT * FROM dataMahasiswa";
  db.query(sql, (error, fields) => {
    if (error) throw error;
    response(200, fields, "Get All Data Mahasiswa", res);
  });
};

module.exports = {
  gate,
  getAllData,
};
