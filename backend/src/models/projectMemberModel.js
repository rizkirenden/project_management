const pool = require("../config/db");

const ProjectMemberModel = {
  async createProjectMember({ project_id, user_id, role }) {
    const query = `
      INSERT INTO project_members (project_id, user_id, role)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [project_id, user_id, role || "contributor"];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async getProjectMemberById(id) {
    const query = `SELECT * FROM project_members WHERE id = $1`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },

  async getAllProjectMembers() {
    const query = `SELECT * FROM project_members ORDER BY id ASC`;
    const { rows } = await pool.query(query);
    return rows;
  },

  async getMembersByProject(project_id) {
    const query = `
      SELECT pm.*, u.name as user_name, u.email
      FROM project_members pm
      JOIN users u ON pm.user_id = u.id
      WHERE pm.project_id = $1
      ORDER BY pm.id ASC;
    `;
    const { rows } = await pool.query(query, [project_id]);
    return rows;
  },

  async updateProjectMember(id, { role }) {
    const query = `
      UPDATE project_members
      SET role = $1
      WHERE id = $2
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [role, id]);
    return rows[0];
  },

  async deleteProjectMember(id) {
    const query = `
      DELETE FROM project_members
      WHERE id = $1
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
};

module.exports = ProjectMemberModel;
