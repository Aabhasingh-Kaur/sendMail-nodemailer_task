var express = require('express');
var router = express.Router();
const UserCollection= require("../models/user.schema");
const { sendMail } = require("../utils/sendmail");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/sendMail", function (req, res, next) {
  console.log(req.body);
  sendMail(req, res);
  console.log("hello")
});

module.exports = router;
