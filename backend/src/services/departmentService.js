const DepartmentModel = require("../models/departmentModel");

const DepartmentService = {
  async create(data) {
    return await DepartmentModel.createDepartment(data);
  },

  async getById(id) {
    return await DepartmentModel.getDepartmentById(id);
  },

  async getAll() {
    return await DepartmentModel.getAllDepartments();
  },

  async update(id, data) {
    return await DepartmentModel.updateDepartment(id, data);
  },

  async delete(id) {
    return await DepartmentModel.deleteDepartment(id);
  },
};

module.exports = DepartmentService;
