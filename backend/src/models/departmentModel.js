const pool = require("../config/db");

const DepartmentModel = {
  async createDepartment({ name, description, head_id }) {
    const query = `
      INSERT INTO departments (name, description, head_id)
      VALUES ($1, $2, $3)
      RETURNING *`;
    const { rows } = await pool.query(query, [name, description, head_id]);
    return rows[0];
  },

  async getDepartmentById(id) {
    const { rows } = await pool.query(`SELECT * FROM departments WHERE id=$1`, [
      id,
    ]);
    return rows[0];
  },

  async getAllDepartments() {
    const { rows } = await pool.query(
      `SELECT * FROM departments ORDER BY id ASC`
    );
    return rows;
  },

  async updateDepartment(id, { name, description, head_id }) {
    const query = `
      UPDATE departments
      SET name=$1, description=$2, head_id=$3, updated_at=NOW()
      WHERE id=$4
      RETURNING *`;
    const { rows } = await pool.query(query, [name, description, head_id, id]);
    return rows[0];
  },

  async deleteDepartment(id) {
    const { rows } = await pool.query(
      `DELETE FROM departments WHERE id=$1 RETURNING *`,
      [id]
    );
    return rows[0];
  },
};

module.exports = DepartmentModel;
