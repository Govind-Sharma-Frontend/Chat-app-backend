const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type User {
        id:ID
        name: String
        mobileNumber:String
        email:String
        password:String
    }
    input UserInput {
        id:ID
        name: String!
        mobileNumber:String!
        email:String!
        password:String!
    }
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }
    type Mutation {
       createUser(input : UserInput):User
    }
`);

module.exports = schema;
