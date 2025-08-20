const pool = require("../config/db");

const TaskCommentModel = {
  async createComment({ task_id, user_id, comment }) {
    const query = `
      INSERT INTO task_comments (task_id, user_id, comment)
      VALUES ($1,$2,$3)
      RETURNING *`;
    const { rows } = await pool.query(query, [task_id, user_id, comment]);
    return rows[0];
  },

  async getCommentsByTaskId(task_id) {
    const { rows } = await pool.query(
      `SELECT tc.*, u.name AS user_name FROM task_comments tc
       JOIN users u ON tc.user_id = u.id
       WHERE tc.task_id=$1
       ORDER BY tc.created_at ASC`,
      [task_id]
    );
    return rows;
  },

  async deleteComment(id) {
    const { rows } = await pool.query(
      `DELETE FROM task_comments WHERE id=$1 RETURNING *`,
      [id]
    );
    return rows[0];
  },
};

module.exports = TaskCommentModel;
