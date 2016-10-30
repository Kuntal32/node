express = require("express");
mongoose = require("mongoose");
bodyParser = require("body-parser");

cookieParser = require('cookie-parser');
session = require('express-session');
passwordHash = require("password-hash");
multipart = require('connect-multiparty');
fs = require('fs-extra');
path = require('path');
client = require('socket.io').listen(8080).sockets;
multipartMiddleware = multipart();

app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret:'gdfghgfjhjhgjghj',resave:false, saveUninitialized:true}));


mongoose.connect("mongodb://localhost/time-west");