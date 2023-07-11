const express = require("express");
const authRoute = require('./Routes/auth.route')
const app = express();
const bodyParser = require('body-parser')
const CORS = require('cors');


// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(CORS());
app.options("*",CORS());
app.use(bodyParser.json());
app.use('/auth',authRoute)
module.exports = app;
