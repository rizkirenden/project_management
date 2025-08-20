const pool = require("../config/db");

const UserModel = {
  async createUser({ name, email, password, role }) {
    const query = `
      INSERT INTO users (name, email, password, role)
      VALUES ($1, $2, $3, $4)
      RETURNING *`;
    const { rows } = await pool.query(query, [name, email, password, role]);
    return rows[0];
  },

  async getUserByEmail(email) {
    const { rows } = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);
    return rows[0];
  },

  async getUserById(id) {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    return rows[0];
  },

  async getAllUsers() {
    const { rows } = await pool.query(`SELECT * FROM users ORDER BY id ASC`);
    return rows;
  },
};

module.exports = UserModel;
