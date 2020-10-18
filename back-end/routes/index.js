var express = require('express');
const client = require('../db.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',async (req, res) => {
  console.log(req.body);
  await client.connect();
  const collection = client.db('studyBuddy').collection('classes');
  collection.insertOne(req.body)
});

module.exports = router;
