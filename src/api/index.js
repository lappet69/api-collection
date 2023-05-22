const router = require("express").Router();
const todoRouter = require("./todo.router");
const bookRouter = require("./book.router");
const userRouter = require("./user.router");
router.get("/", (req, res) => {
  res.send(`hey,API running 🥳 `);
});
router.use("/api/v1/todo", todoRouter);
router.use("/api/v1/user", userRouter);
router.use("/api/v1/book", bookRouter);

router.use(function (req, res, next) {
  res.invalidInput = function () {
    return res.status(400).json({ error: "Invalid input" });
  };
  next();
});

module.exports = router;
