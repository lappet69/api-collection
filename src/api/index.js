const router = require("express").Router();
const todoRouter = require("./todo.router");
const bookRouter = require("./book.router");
const userRouter = require("./user.router");
router.get("/", (req, res) => {
  res.send(`hey,API running 🥳 `);
});
router.use("/todo", todoRouter);
router.get("/user", userRouter);
router.use("/book", bookRouter);

router.use(function (req, res, next) {
  res.invalidInput = function () {
    return res.status(400).json({ error: "Invalid input" });
  };
  next();
});

module.exports = router;
