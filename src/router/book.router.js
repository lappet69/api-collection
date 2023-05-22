const router = require("express").Router();
const BookCTRL = require("../controllers/book.controller");
const { verifyUser } = require("../middlewares/restrict");

router.get("/", BookCTRL.getBooks);
router.post("/create", verifyUser, BookCTRL.createBook);
router.get("/:id", BookCTRL.getBookById);
router.put("/:id", verifyUser, BookCTRL.updateBookById);
router.delete("/:id", verifyUser, BookCTRL.deleteBook);
router.post("/rent-book/:id", verifyUser, BookCTRL.rentBook);
router.post("/add-amount-book/:id", verifyUser, BookCTRL.addAmountBook);

module.exports = router;
