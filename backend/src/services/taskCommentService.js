const TaskCommentModel = require("../models/taskCommentModel");

const TaskCommentService = {
  async create(data) {
    return await TaskCommentModel.createComment(data);
  },

  async getByTaskId(task_id) {
    return await TaskCommentModel.getCommentsByTaskId(task_id);
  },

  async delete(id) {
    return await TaskCommentModel.deleteComment(id);
  },
};

module.exports = TaskCommentService;
