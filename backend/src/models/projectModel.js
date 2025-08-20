const pool = require("../config/db");

const ProjectModel = {
  async createProject({
    name,
    department_id,
    description,
    status,
    start_date,
    end_date,
    budget,
    progress,
    priority,
  }) {
    const query = `
      INSERT INTO projects (name, department_id, description, status, start_date, end_date, budget, progress, priority)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *`;
    const { rows } = await pool.query(query, [
      name,
      department_id,
      description,
      status || "planning",
      start_date,
      end_date,
      budget || 0,
      progress || 0,
      priority || "medium",
    ]);
    return rows[0];
  },

  async getProjectById(id) {
    const { rows } = await pool.query(`SELECT * FROM projects WHERE id=$1`, [
      id,
    ]);
    return rows[0];
  },

  async getAllProjects() {
    const { rows } = await pool.query(`SELECT * FROM projects ORDER BY id ASC`);
    return rows;
  },

  async updateProject(
    id,
    {
      name,
      department_id,
      description,
      status,
      start_date,
      end_date,
      budget,
      progress,
      priority,
    }
  ) {
    const query = `
      UPDATE projects
      SET name=$1, department_id=$2, description=$3, status=$4, start_date=$5, end_date=$6, budget=$7, progress=$8, priority=$9, updated_at=NOW()
      WHERE id=$10
      RETURNING *`;
    const { rows } = await pool.query(query, [
      name,
      department_id,
      description,
      status,
      start_date,
      end_date,
      budget,
      progress,
      priority,
      id,
    ]);
    return rows[0];
  },

  async deleteProject(id) {
    const { rows } = await pool.query(
      `DELETE FROM projects WHERE id=$1 RETURNING *`,
      [id]
    );
    return rows[0];
  },
};

module.exports = ProjectModel;
