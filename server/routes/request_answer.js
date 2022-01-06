const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const { verifyToken } = require('jsonwebtoken');
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config);

router.use(bodyParser.urlencoded({ extended: false }));

router.route('/requestAns/regist').post((req, res) => {
    const request_idx = req.body.request_idx;
    const question_title_idx = req.body.question_title_idx;
    const question_answer_idx = req.body.question_answer_idx;
    const answer_text
});



module.exports = router;