const bycrpt = require("bcrypt");
const { User } = require("../Models/user.model");

const createUser = async (payload) => {
  const { password } = payload;
  const HashedPassword = await bycrpt.hash(password, 10);
  payload.password = HashedPassword;
  return await User.create(payload);
};

const getAllRegisterdUsers = async(payload)=>{
    const users = await User.find()
    console.log('users',users);
    return users;
}

const getUser = async (payload) => {
  const user = await User.findOne({ _id: payload });

//   const isMatched = await bycrpt.compareSync(payload.password, user.password);
//   if (!isMatched) {
//     throw new Error("Password not matched.");
//   }
  return user;
};

module.exports = { createUser, getUser,getAllRegisterdUsers };