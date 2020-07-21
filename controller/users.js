const express = require('express');
const router = express.Router();
const dbConn  = require('../model/db');

router.get('/', function (req, res) {
    dbConn.query('SELECT * FROM users ORDER BY id DESC',function(err,rows){
        if(err) {
            res.send('Error!')
        } else {
            res.render('user',{
                title:'Node MVC CRUD',
                users:rows
            })
            // console.log(rows);
        }        
    })
})

router.get('/add',(req, res) => {
    res.render('add', {
        title : 'Node MVC CRUD'
    })
})

router.post('/save',(req, res) => { 
    let data = {name: req.body.name, age: req.body.age, phone_no: req.body.phone_no};
    let sql = "INSERT INTO users SET ?";
    let query = dbConn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
});

router.get('/edit/:userId',(req, res) => {
    const userId = req.params.userId;
    let sql = `Select * from users where id = ${userId}`;
    let query = dbConn.query(sql,(err, result) => {
        if(err) throw err;
        res.render('edit', {
            title : 'Node MVC CRUD',
            user : result[0]
        });
    });
});

router.post('/update',(req, res) => {
    const userId = req.body.id;
    let sql = "update users SET name='"+req.body.name+"',  age='"+req.body.age+"',  phone_no='"+req.body.phone_no+"' where id ="+userId;
    let query = dbConn.query(sql,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
});

router.get('/delete/:userId',(req, res) => {
    const userId = req.params.userId;
    let sql = `DELETE from users where id = ${userId}`;
    let query = dbConn.query(sql,(err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

module.exports = router;