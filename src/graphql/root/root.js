const users = require("../../Services/user.service");

const root = {
  getAllUsers: async () => {
    return await users.getAllRegisterdUsers();
  },
  getUser: async ({ id }) => {
    return await users.getUser(id);
  },
  createUser: async ({ input }) => {
    return await users.createUser(input);
  },
};

module.exports = root;
