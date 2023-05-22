const router = require("express").Router();
const BookCTRL = require("../src/controllers/book.controller");
const { verifyUser } = require("../src/middlewares/restrict");

router.get("/", verifyUser, BookCTRL.getBooks);
router.post("/create", verifyUser, BookCTRL.createBook);
router.get("/:id", verifyUser, BookCTRL.getBookById);
router.put("/:id", verifyUser, BookCTRL.updateBookById);
router.delete("/:id", verifyUser, BookCTRL.deleteBook);
router.post("/rent-book/:id", verifyUser, BookCTRL.rentBook);
router.post("/add-amount-book/:id", verifyUser, BookCTRL.addAmountBook);

module.exports = router;
