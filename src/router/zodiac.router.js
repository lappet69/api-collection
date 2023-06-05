const router = require("express").Router();
const {
  getZodiac,
  getZodiacSign,
} = require("../controllers/zodiac.controller");

router.get("/", getZodiac);
router.get("/:sign", getZodiacSign);

module.exports = router;
