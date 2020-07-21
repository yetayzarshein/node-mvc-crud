const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.use(require('./controller/users'));

app.set('views',path.join(__dirname,'views'));

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8044);