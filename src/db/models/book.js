"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static getAllBooks() {
      return this.findAll();
    }

    static store({ title, author, desc }) {
      try {
        this.create({ title: title, author: author, desc: desc });
      } catch (err) {
        console.log(err);
      }
    }
    static getBookById(id) {
      try {
        const book = this.findByPk(id);
        return book;
      } catch (err) {
        console.log(err);
      }
    }
    static updateBookById({ id, title, author, desc }) {
      try {
        const book = this.update(
          { title, author, desc },
          {
            where: {
              id,
            },
          }
        );
        return book;
      } catch (err) {
        console.log(err);
      }
    }
    static addAmountBook({ id, amount }) {
      try {
        const book = this.update(
          { amount: sequelize.literal(`amount + ${amount}`) },
          {
            where: {
              id,
            },
          }
        );
        return book;
      } catch (err) {
        console.log(err);
      }
    }
    static rentBook({ id, amount }) {
      try {
        const book = this.update(
          { amount: sequelize.literal(`amount - ${amount}`) },
          {
            where: {
              id,
            },
          }
        );
        return book;
      } catch (err) {
        console.log(err);
      }
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      desc: DataTypes.STRING,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
