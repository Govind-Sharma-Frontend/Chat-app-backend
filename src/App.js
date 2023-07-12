const express = require("express");
const {graphqlHTTP } = require('express-graphql');
// const authRoute = require('./Routes/auth.route');
const CORS = require('cors');
const app = express();  
const bodyParser = require('body-parser');
const schema = require('./graphql/schema/schema')
const root = require('./graphql/root/root')

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

app.use(CORS());
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true,
    
}))
app.options("*",CORS());
app.use(bodyParser.json());
// app.use('/auth',authRoute)
module.exports = app;
