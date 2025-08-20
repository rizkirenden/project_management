const UserService = require("../services/userService");

const UserController = {
  async register(req, res) {
    try {
      const user = await UserService.register(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async login(req, res) {
    try {
      const user = await UserService.login(req.body);
      res.json(user);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = UserController;
