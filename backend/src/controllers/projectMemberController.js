const ProjectMemberService = require("../services/projectMemberService");

const ProjectMemberController = {
  async create(req, res, next) {
    try {
      const member = await ProjectMemberService.createProjectMember(req.body);
      res.status(201).json(member);
    } catch (err) {
      next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const member = await ProjectMemberService.getProjectMemberById(
        req.params.id
      );
      if (!member) return res.status(404).json({ message: "Member not found" });
      res.json(member);
    } catch (err) {
      next(err);
    }
  },

  async getAll(req, res, next) {
    try {
      const members = await ProjectMemberService.getAllProjectMembers();
      res.json(members);
    } catch (err) {
      next(err);
    }
  },

  async getByProject(req, res, next) {
    try {
      const members = await ProjectMemberService.getMembersByProject(
        req.params.projectId
      );
      res.json(members);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const member = await ProjectMemberService.updateProjectMember(
        req.params.id,
        req.body
      );
      if (!member) return res.status(404).json({ message: "Member not found" });
      res.json(member);
    } catch (err) {
      next(err);
    }
  },

  async delete(req, res, next) {
    try {
      const member = await ProjectMemberService.deleteProjectMember(
        req.params.id
      );
      if (!member) return res.status(404).json({ message: "Member not found" });
      res.json({ message: "Member deleted", member });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = ProjectMemberController;
