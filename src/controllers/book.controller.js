const { Book } = require("../db/models");
const { success, error, validation } = require("../utils/responseApi");

exports.createBook = async (req, res) => {
  const { title, author, desc } = req.body;
  try {
    const store = await Book.store({ title, author, desc });
    res.json(success("OK", { data: "" }, res.statusCode));
  } catch (error) {
    console.log(error);
  }
};

exports.getBooks = async (req, res) => {
  const results = await Book.getAllBooks();
  res.json({ status: 200, data: results });
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.getBookById(id);
    res.json({ status: 200, data: book });
  } catch (error) {
    console.log(error);
  }
};

exports.updateBookById = async (req, res) => {
  const { id } = req.params;
  const { title, author, desc } = req.body;
  if (!title || !author) {
    res
      .status(400)
      .json({ code: 400, message: "title and author cannot be null" });
  } else {
    try {
      const result = await Book.updateBookById({ id, title, author, desc });

      res.json({ message: "Ok", code: 200 });
    } catch (error) {
      console.log(error);
    }
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  const checkId = await Book.getBookById(id);
  if (!checkId) {
    res.status(404).json({ message: "Book not found", code: 404 });
  } else {
    try {
      const deleteBook = await Book.destroy({ where: { id: id } });
      res.json({ message: "success delete book", code: 200 });
    } catch (error) {
      console.log(error);
    }
  }
};

exports.addAmountBook = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    const result = await Book.addAmountBook({ id, amount });
    res.json({ status: 200, message: "succes add amount" });
  } catch (error) {
    console.log(error);
  }
};

exports.rentBook = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  try {
    const result = await Book.rentBook({ id, amount });
    res.json({ status: 200, message: "succes rent book" });
  } catch (error) {
    console.log(error);
  }
};
