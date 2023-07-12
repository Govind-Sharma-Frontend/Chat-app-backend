const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
      name:{type:String},
      mobileNumber:{type:String},         
      email:{type:String},
      password:{type:String}
})

module.exports.User = mongoose.model("users", UserSchema);