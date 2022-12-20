"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static getAllTodos({ user_id }) {
      return this.findAll({ where: { user_id } });
    }

    static store({ task, date, time, user_id }) {
      try {
        this.create({ task, date, time, complete: false, user_id });
      } catch (err) {
        console.log(err);
      }
    }
    static getTodoById({ id, user_id }) {
      try {
        const todo = this.findOne({ where: { id, user_id } });
        return todo;
      } catch (err) {
        console.log(err);
      }
    }
    static updateTodoById({ id, task, date, time, complete, user_id }) {
      try {
        const todo = this.update(
          { task, date, time, complete },
          {
            where: {
              id,
              user_id,
            },
          }
        );
        return todo;
      } catch (err) {
        console.log(err);
      }
    }
    static CheckTodo({ id, complete, user_id }) {
      try {
        const todo = this.update(
          { complete: complete },
          {
            where: {
              id,
              user_id,
            },
          }
        );
        return todo;
      } catch (err) {
        console.log(err);
      }
    }
  }

  Todo.init(
    {
      task: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      complete: DataTypes.BOOLEAN,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
