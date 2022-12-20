const router = require("express").Router();
const UserCTRL = require("../controllers/user.controller");

router.get("/", UserCTRL.getUsers);
router.post("/create", UserCTRL.createUser);
router.post("/login", UserCTRL.login);
router.get("/:id", UserCTRL.getUserById);
router.post("/update/:id", UserCTRL.updateUserById);
router.post("/delete/:id", UserCTRL.deleteUser);

module.exports = router;
