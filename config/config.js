var mysql = require('mysql');
var http = require('http');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'notary'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");       
});