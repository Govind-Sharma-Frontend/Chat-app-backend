// const mongoose = require("mongoose");
const { buildSchema } = require("graphql");

const UserSchema = buildSchema(`  
 

type User {
      id:ID
      name: String
      mobileNumber:Int
      email:String
      password:String
}

`);

// module.exports.User = mongoose.model("users", UserSchema);
module.exports = UserSchema;
