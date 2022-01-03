const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());

// 고수 가입
router.route("/gosu/regist/nonmem").post((req, res) => {
    const cate1_idx = req.body.cate1_idx;
});