var mysql = require('../helper/db');

exports.getuser = function (callback) {
    mysql.query('SELECT * FROM users ORDER BY id DESC',function(err,rows){
        callback(err,rows)    
    })
};

exports.adduser = function(data,callback){
	let sql = "INSERT INTO users SET ?";
    mysql.query(sql, data,(err, results) => {
      callback(err,results)
    });
}