var express = require("express");
const fs = require("fs");
var router = express.Router();

// 전체 데이터 받아오기
router.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const jsonFile = fs.readFileSync("./data/data.json", "utf8");
  const jsonData = JSON.parse(jsonFile);
  if (req.query) {
    const start = parseInt(req.query._start);
    const limit = parseInt(req.query._limit);
    const subData = jsonData.filter(
      (val) => val.id > start && val.id <= start + limit
    );
    res.status(201).json(subData);
  } else {
    res.status(200).json(jsonData);
  }
});

// 데이터 갯수 받아오기
router.get("/count", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const jsonFile = fs.readFileSync("./data/data.json", "utf8");
  const jsonData = JSON.parse(jsonFile);
  const data_count = jsonData.length;
  console.log(data_count);
  res.send(`${data_count}`);
});

module.exports = router;
