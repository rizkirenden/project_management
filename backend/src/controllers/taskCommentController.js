const TaskCommentService = require("../services/taskCommentService");

const TaskCommentController = {
  async create(req, res) {
    try {
      const comment = await TaskCommentService.create(req.body);
      res.json(comment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getByTask(req, res) {
    try {
      const comments = await TaskCommentService.getByTaskId(req.params.taskId);
      res.json(comments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const comment = await TaskCommentService.delete(req.params.id);
      if (!comment) return res.status(404).json({ error: "Comment not found" });
      res.json({ message: "Comment deleted", comment });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = TaskCommentController;
