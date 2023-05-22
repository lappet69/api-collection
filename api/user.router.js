const router = require("express").Router();
const UserCTRL = require("../src/controllers/user.controller");

router.get("/", UserCTRL.getUsers);
router.post("/create", UserCTRL.createUser);
router.post("/login", UserCTRL.login);
router.get("/:id", UserCTRL.getUserById);
router.post("/update/:id", UserCTRL.updateUserById);
router.post("/logout", UserCTRL.logout);
router.delete("/delete/:email", UserCTRL.deleteUser);

module.exports = router;
