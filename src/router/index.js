const router = require("express").Router();
const todoRouter = require("./todo.router");
const bookRouter = require("./book.router");
const userRouter = require("./user.router");
const zodiacRouter = require("./zodiac.router");

router.get("/", (req, res) => {
  res.send(`hey,API running 🥳 `);
});
router.use("/todo", todoRouter);
router.use("/user", userRouter);
router.use("/book", bookRouter);
router.use("/zodiac", zodiacRouter);

router.use(function (req, res, next) {
  res.invalidInput = function () {
    return res.status(400).json({ error: "Invalid input" });
  };
  next();
});

module.exports = router;
