const DepartmentService = require("../services/departmentService");

const DepartmentController = {
  async create(req, res) {
    try {
      const dept = await DepartmentService.create(req.body);
      res.json(dept);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const dept = await DepartmentService.getById(req.params.id);
      if (!dept) return res.status(404).json({ error: "Department not found" });
      res.json(dept);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const depts = await DepartmentService.getAll();
      res.json(depts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const dept = await DepartmentService.update(req.params.id, req.body);
      if (!dept) return res.status(404).json({ error: "Department not found" });
      res.json(dept);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const dept = await DepartmentService.delete(req.params.id);
      if (!dept) return res.status(404).json({ error: "Department not found" });
      res.json({ message: "Department deleted", dept });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = DepartmentController;
