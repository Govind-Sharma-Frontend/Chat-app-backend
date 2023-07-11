// const bycrpt = require("bcrypt");
// const { User } = require("../Models/user.model");

// const CreateUser = async (payload) => {
//   const { password } = payload;
//   const HashedPassword = await bycrpt.hash(password, 10);
//   payload.password = HashedPassword;
//   return await User.create(payload);
// };

// const GetUser = async (payload) => {
//   const user = await User.findOne({ email: payload.email });

//   const isMatched = await bycrpt.compareSync(payload.password, user.password);
//   if (!isMatched) {
//     throw new Error("Password not matched.");
//   }
//   return user;
// };

// module.exports = { CreateUser, GetUser };
