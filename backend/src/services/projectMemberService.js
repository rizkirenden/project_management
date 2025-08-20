const ProjectMemberModel = require("../models/projectMemberModel");

const ProjectMemberService = {
  async createProjectMember(data) {
    return await ProjectMemberModel.createProjectMember(data);
  },

  async getProjectMemberById(id) {
    return await ProjectMemberModel.getProjectMemberById(id);
  },

  async getAllProjectMembers() {
    return await ProjectMemberModel.getAllProjectMembers();
  },

  async getMembersByProject(project_id) {
    return await ProjectMemberModel.getMembersByProject(project_id);
  },

  async updateProjectMember(id, data) {
    return await ProjectMemberModel.updateProjectMember(id, data);
  },

  async deleteProjectMember(id) {
    return await ProjectMemberModel.deleteProjectMember(id);
  },
};

module.exports = ProjectMemberService;
