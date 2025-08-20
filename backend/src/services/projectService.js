const ProjectModel = require("../models/projectModel");

const ProjectService = {
  async create(data) {
    return await ProjectModel.createProject(data);
  },

  async getById(id) {
    return await ProjectModel.getProjectById(id);
  },

  async getAll() {
    return await ProjectModel.getAllProjects();
  },

  async update(id, data) {
    return await ProjectModel.updateProject(id, data);
  },

  async delete(id) {
    return await ProjectModel.deleteProject(id);
  },
};

module.exports = ProjectService;
