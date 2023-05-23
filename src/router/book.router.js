const router = require("express").Router();
const BookCTRL = require("../controllers/book.controller");
const { verifyUser } = require("../middlewares/restrict");

router.get("/", BookCTRL.getBooks);
router.post("/create", BookCTRL.createBook);
router.get("/:id", BookCTRL.getBookById);
router.put("/:id", BookCTRL.updateBookById);
router.delete("/:id", BookCTRL.deleteBook);
router.post("/rent-book/:id", BookCTRL.rentBook);
router.post("/add-amount-book/:id", BookCTRL.addAmountBook);

module.exports = router;
