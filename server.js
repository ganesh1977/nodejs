const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const url = require('url');

var engines = require('consolidate');

const http = require('http');
let config = require('./config/config.js');
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'notary'
});
const path = require('path');
const app = express();
const validator = require('express-validator');
const { exit } = require('process');

app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', __dirname + '/views');

app.set('view engine', 'pug');

app.listen(3000, function() {
  console.log('listening on 3000')
});



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {  
var sql = "SELECT first_name,last_name,email FROM users where email='"+ req.body.name +"'";
connection.query(sql, function (err, result, fields) {
  if (err) throw err;    
    let personList = [];
    for (let i = 0; i < result.length; i++) {
          var person = {
            'first_name':result[i].first_name,
            'last_name':result[i].last_name,
            'email':result[i].email,        
          }      
        personList.push(person)        
      }  
      console.log(personList);        
      res.render('contact',{'personList': personList});
    });

});