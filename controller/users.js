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
    var data = req.params.userId;    
    user_model.getuserid(data,function(err,result){
        if(err){
            
        }else{
            res.render('edit', {
                title : 'Node MVC CRUD',
                user : result[0]
            })
        }
    })
});

router.post('/update',(req, res) => {
    var data = req.body;    
    user_model.edituser(data,function(err,result){
        if(err){
            
        }else{
            res.redirect('/');
        }
    })
});

router.get('/delete/:userId',(req, res) => {
    var data = req.params.userId;
    user_model.deleteuser(data,function(err,result){
        if(err){
            
        }else{
            res.redirect('/');
        }
    })
});

module.exports = router;