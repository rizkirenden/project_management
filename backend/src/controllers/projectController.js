const ProjectService = require("../services/projectService");

const ProjectController = {
  async create(req, res) {
    try {
      const project = await ProjectService.create(req.body);
      res.json(project);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const project = await ProjectService.getById(req.params.id);
      if (!project) return res.status(404).json({ error: "Project not found" });
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const projects = await ProjectService.getAll();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const project = await ProjectService.update(req.params.id, req.body);
      if (!project) return res.status(404).json({ error: "Project not found" });
      res.json(project);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const project = await ProjectService.delete(req.params.id);
      if (!project) return res.status(404).json({ error: "Project not found" });
      res.json({ message: "Project deleted", project });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = ProjectController;
