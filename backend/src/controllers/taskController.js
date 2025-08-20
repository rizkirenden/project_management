const TaskService = require("../services/taskService");

const TaskController = {
  async create(req, res) {
    try {
      const task = await TaskService.create(req.body);
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const task = await TaskService.getById(req.params.id);
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const tasks = await TaskService.getAll();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const task = await TaskService.update(req.params.id, req.body);
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const task = await TaskService.delete(req.params.id);
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json({ message: "Task deleted", task });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = TaskController;
