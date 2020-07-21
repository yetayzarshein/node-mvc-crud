var mysql = require('../helper/db');

exports.getuser = function (callback) {
    mysql.query('SELECT * FROM users ORDER BY id DESC',function(err,rows){
        callback(err,rows)
    })
};

exports.getuserid = function (data,callback) {       
    let sql = "SELECT * FROM users WHERE id=?";
    mysql.query(sql, data,(err, results) => {
      callback(err,results)
    });
};

exports.adduser = function(data,callback) {
	let sql = "INSERT INTO users SET ?";
    mysql.query(sql, data,(err, results) => {
      callback(err,results)
    });
};

exports.edituser = function(data,callback) {
    let sql = "update users SET name='"+data.name+"',  age='"+data.age+"',  phone_no='"+data.phone_no+"' where id ="+data.id;    
    mysql.query(sql,(err, results) => {
      callback(err,results)
    });
};

exports.deleteuser = function(data,callback) {
	let sql = "DELETE FROM users WHERE id=?";
    mysql.query(sql,data,(err, results) => {
      callback(err,results)
    });
};