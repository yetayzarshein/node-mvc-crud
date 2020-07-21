const express = require('express');
const router = express.Router();
const user_model  = require('../model/user_model.js');

router.get('/', function (req, res) {
    user_model.getuser(function(err,result){
        if(err) {
            res.send('Error!')
        } else {
            res.render('user',{
                title:'Node MVC CRUD',
                users:result
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
    var data = req.body;
    user_model.adduser(data,function(err,result){
        if(err){
            
        }else{
            res.redirect('/');
        }
    })
    
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
    let sql = "update users SET name='"+req.body.name+"',  email='"+req.body.age+"',  phone_no='"+req.body.phone_no+"' where id ="+userId;
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