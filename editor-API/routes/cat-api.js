var express = require("express");
const fs = require("fs");
var router = express.Router();

// 루트 데이터 받아오기
router.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const jsonFile = fs.readFileSync("./data/root.json", "utf8");
  const jsonData = JSON.parse(jsonFile);
  res.status(200).json(jsonData);
});

// 내부 데이터 받아오기?
router.get("/:id", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.params.id;
  const jsonFile = fs.readFileSync(`./data/${id}.json`, "utf8");
  const jsonData = JSON.parse(jsonFile);
  res.status(201).json(jsonData);
});

module.exports = router;
