var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//配置模块
//连接数据库
var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  port     : '',
  database : ''
});
connection.connect();
router.post('/', function (req, res, next) {
    var params = req.param("cardName");
    // var params = req.body.cardName;
    console.log("车牌号" + params);
    var sql = "select * from test where GOOD LIKE CONCAT('%',?,'%') order by LIST desc  LIMIT 10 ";
    connection.query(sql, [params],function (error, data) {
        console.log(error);
        if (error) {
            var result = {
                "status": "500",
                "message": "服务器错误"
            }
            return res.jsonp(result);
        }
        else{
            var result = {
                "status": "200",
                "message": "success",
                data:data
            }
            return res.jsonp(result);
        }
    })
});
module.exports = router;