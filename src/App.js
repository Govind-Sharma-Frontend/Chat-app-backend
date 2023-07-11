const express = require("express");
const {graphqlHTTP } = require('express-graphql');
const authRoute = require('./Routes/auth.route');
const app = express();
const bodyParser = require('body-parser');
const CORS = require('cors');
const UserSchema = require('./Models/user.model')

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(CORS());
app.use('/graphql',graphqlHTTP({
    graphiql:true,
    UserSchema
    
}))
app.options("*",CORS());
app.use(bodyParser.json());
app.use('/auth',authRoute)
module.exports = app;
