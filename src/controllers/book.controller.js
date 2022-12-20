const { Book } = require("../db/models");
const { success, error, validation } = require("../utils/responseApi");

exports.createBook = async (req, res) => {
  const { title, author, desc } = req.body;
  try {
    const store = await Book.store({ title, author, desc });
    res.json(success("OK", { data: "Some random data" }, res.statusCode));
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
  try {
    const result = await Book.updateBookById({ id, title, author, desc });
    res.json({ status: 200, message: "succes update" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.destroy({ where: { id: id } });
    res.json({ status: 200, message: "succes delete" });
  } catch (error) {
    console.log(error);
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
