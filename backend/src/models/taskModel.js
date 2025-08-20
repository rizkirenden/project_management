const pool = require("../config/db");

const TaskModel = {
  async createTask({
    project_id,
    parent_task_id,
    title,
    description,
    assigned_to,
    status,
    priority,
    due_date,
    attachments,
  }) {
    const query = `
      INSERT INTO tasks (project_id, parent_task_id, title, description, assigned_to, status, priority, due_date, attachments)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *`;
    const { rows } = await pool.query(query, [
      project_id,
      parent_task_id || null,
      title,
      description || null,
      assigned_to || null,
      status || "todo",
      priority || "medium",
      due_date || null,
      attachments ? JSON.stringify(attachments) : null,
    ]);
    return rows[0];
  },

  async getTaskById(id) {
    const { rows } = await pool.query(`SELECT * FROM tasks WHERE id=$1`, [id]);
    return rows[0];
  },

  async getAllTasks() {
    const { rows } = await pool.query(`SELECT * FROM tasks ORDER BY id ASC`);
    return rows;
  },

  async updateTask(
    id,
    {
      project_id,
      parent_task_id,
      title,
      description,
      assigned_to,
      status,
      priority,
      due_date,
      attachments,
    }
  ) {
    const query = `
      UPDATE tasks
      SET project_id=$1, parent_task_id=$2, title=$3, description=$4, assigned_to=$5, status=$6, priority=$7, due_date=$8, attachments=$9, updated_at=NOW()
      WHERE id=$10
      RETURNING *`;
    const { rows } = await pool.query(query, [
      project_id,
      parent_task_id || null,
      title,
      description || null,
      assigned_to || null,
      status,
      priority,
      due_date || null,
      attachments ? JSON.stringify(attachments) : null,
      id,
    ]);
    return rows[0];
  },

  async deleteTask(id) {
    const { rows } = await pool.query(
      `DELETE FROM tasks WHERE id=$1 RETURNING *`,
      [id]
    );
    return rows[0];
  },
};

module.exports = TaskModel;
