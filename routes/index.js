var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('public/zcc.txt','utf-8',function(err,data){
    var num=req.body.title;
    res.send({ 'nam': num });
    fs.writeFile("public/zcc.txt",num,function(err){
      res.send({ 'nam': num });
    })
  })

});

module.exports = router;
