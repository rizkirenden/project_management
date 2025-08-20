const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const DepartmentController = require("../controllers/departmentController");
const ProjectController = require("../controllers/projectController");
const TaskController = require("../controllers/taskController");
const TaskCommentController = require("../controllers/taskCommentController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/user", UserController.getAllUsers);

router.post("/department", DepartmentController.create);
router.get("/department", DepartmentController.getAll);
router.get("/department/:id", DepartmentController.getById);
router.put("/department/:id", DepartmentController.update);
router.delete("/department/:id", DepartmentController.delete);

router.post("/project", ProjectController.create);
router.get("/project", ProjectController.getAll);
router.get("/project/:id", ProjectController.getById);
router.put("/project/:id", ProjectController.update);
router.delete("/project/:id", ProjectController.delete);

router.post("/task", TaskController.create);
router.get("/task", TaskController.getAll);
router.get("/task/:id", TaskController.getById);
router.put("/task/:id", TaskController.update);
router.delete("/task/:id", TaskController.delete);

router.post("/task", TaskCommentController.create);
router.get("/task/:taskId", TaskCommentController.getByTask);
router.delete("/task/:id", TaskCommentController.delete);

module.exports = router;
