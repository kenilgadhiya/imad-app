var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto')

var config = {
   user: 'kenilgadhiya',
   database: 'kenilgadhiya',
   host: 'db.imad.hasura-app.io',
   port: '5432',
   password: process.env.DB_PASSWORD
};

var app =express();
app.use(morgan('combined'));

function createTemplate (data){}

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash (input,salt){
    //how dowe create a hash?
    var hashed = crypto.pdkd25sync(input,salt, 10000, 512,'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input', function(req, res){
    var hashedString = hash(req.params.input,"this some random string");
    res.send(hashedString);
});

var pool = new Pool(config);
app.get('/test-db', function(req,res){
    //make a select request
})