const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const UserService = {
  async register({ name, email, password, role }) {
    const hashedPassword = await bcrypt.hash(password, 8);
    return await UserModel.createUser({
      name,
      email,
      password: hashedPassword,
      role,
    });
  },

  async login({ email, password }) {
    const user = await UserModel.getUserByEmail(email);
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");

    return user;
  },

  async getAllUsers() {
    return await UserModel.getAllUsers();
  },
};

module.exports = UserService;
