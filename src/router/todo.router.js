const router = require("express").Router();
const TodoCTRL = require("../controllers/todo.controller");
const { verifyUser } = require("../middlewares/restrict");

router.get("/", verifyUser, TodoCTRL.getTodos);
router.post("/create", verifyUser, TodoCTRL.createTodo);
router.get("/:id", verifyUser, TodoCTRL.getTodoById);
router.put("/update/:id", verifyUser, TodoCTRL.updateTodoById);
router.delete("/delete/:id", verifyUser, TodoCTRL.deleteTodo);
router.patch("/check-todo/:id", verifyUser, TodoCTRL.checkTodo);

module.exports = router;
