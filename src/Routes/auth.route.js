// const router = require("express").Router();
// const userService = require("../Services/user.service");
// router.post("/register", async (req, res) => {
//   const { name, email, password, mobileNumber } = req.body;
//   const createUser = await userService.CreateUser(req.body);
//   res.send({ data: createUser, message: "Register Successfully." });
// });

// router.post("/sign-in", async (req, res) => {
//   try {
//     const signUser = await userService.GetUser(req.body);
//     res.send({ data: signUser, message: "Sign in successfully." });
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// module.exports = router;
