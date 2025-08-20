const TaskModel = require("../models/taskModel");

const TaskService = {
  async create(data) {
    return await TaskModel.createTask(data);
  },

  async getById(id) {
    return await TaskModel.getTaskById(id);
  },

  async getAll() {
    return await TaskModel.getAllTasks();
  },

  async update(id, data) {
    return await TaskModel.updateTask(id, data);
  },

  async delete(id) {
    return await TaskModel.deleteTask(id);
  },
};

module.exports = TaskService;
