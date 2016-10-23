express = require("express");
mongoose = require("mongoose");
bodyParser = require("body-parser");

cookieParser = require('cookie-parser');
session = require('express-session');
passwordHash = require("password-hash");
app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret:'gdfghgfjhjhgjghj',resave:false, saveUninitialized:true}));


mongoose.connect("mongodb://localhost/time-west");