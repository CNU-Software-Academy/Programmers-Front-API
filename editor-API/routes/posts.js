var express = require("express");
const fs = require("fs");
var router = express.Router();

// 편집 가능한 글 목록 불러오기
router.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const jsonFile = fs.readFileSync("./data/post.json", "utf8");
  const jsonData = JSON.parse(jsonFile);
  res.status(200).json(jsonData);
});

// 특정 게시물 불러오기
router.get("/:id", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const jsonFile = fs.readFileSync("./data/post.json", "utf8");
  const jsonData = JSON.parse(jsonFile);
  const id = req.params.id;
  const result = jsonData.filter((val) => val.id === parseInt(id));
  res.status(201).json(...result);
});

// 게시글 저장하기
router.post("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const jsonFile = fs.readFileSync("./data/post.json", "utf8");
  const jsonData = JSON.parse(jsonFile);
  const lastID = parseInt(jsonData[jsonData.length - 1].id) + 1;
  const nowDate = new Date();
  const newData = {
    id: lastID,
    title: req.body.title,
    content: req.body.content,
    published_at: nowDate,
    created_at: nowDate,
    updated_at: nowDate,
  };
  jsonData.push(newData);
  console.log(jsonData);
  fs.writeFileSync("./data/post.json", JSON.stringify(jsonData));
  res.status(202).json(newData);
});

// 게시글 수정하기
router.put("/:id", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const jsonFile = fs.readFileSync("./data/post.json", "utf8");
  const jsonData = JSON.parse(jsonFile);
  const id = req.params.id;
  let putData = jsonData.filter((val) => val.id === parseInt(id));
  putData[0].title = req.body.title;
  putData[0].content = req.body.content;
  putData[0].updated_at = new Date();
  fs.writeFileSync("./data/post.json", JSON.stringify(jsonData));
  res.status(201).json(...putData);
});

module.exports = router;
