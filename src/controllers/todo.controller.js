const { Todo } = require("../db/models");
const { success, error, validation } = require("../utils/responseApi");

exports.createTodo = async (req, res, next) => {
  const { task, date, time } = req.body;
  const { user_id } = req.auth;

  if (!task) {
    res.status(400).json(error("Task cannot be null", res.statusCode));
  } else {
    try {
      const store = await Todo.store({ task, date, time, user_id });
      res.json(success("OK", store, res.statusCode));
    } catch (error) {
      console.log(error);
    }
  }
};

exports.getTodos = async (req, res) => {
  const { user_id } = req?.auth;
  const results = await Todo.getAllTodos({ user_id });
  res.json({ message: "Ok", code: 200, results });
};

exports.getTodoById = async (req, res) => {
  const { id } = req.params;
  console.log(id, req.auth.user_id);
  try {
    const getTodo = await Todo.getTodoById({
      id: id,
      user_id: req.auth.user_id,
    });
    res.json({ message: "Ok", code: 200, result: getTodo });
  } catch (error) {
    console.log(error);
  }
};

exports.updateTodoById = async (req, res) => {
  const { id } = req.params;
  const { task, date, time, complete } = req.body;
  const { user_id } = req?.auth;
  const checkId = await Todo.getTodoById({ id, user_id });
  if (!checkId) {
    res.json({ status: 400, message: "task is not found" });
  } else {
    try {
      const result = await Todo.updateTodoById({
        id,
        task,
        date,
        time,
        complete,
        user_id,
      });
      res.json({ status: 200, message: "success update" });
    } catch (error) {
      console.log(error);
    }
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req?.auth;
  try {
    const getTodo = await Todo.getTodoById({ id, user_id });
    if (!getTodo) {
      return res.status(400).json(error("data not found", res.statusCode));
    }
    const deleteTodo = await Todo.destroy({ where: { id, user_id } });
    res.json({ status: 200, message: "succes delete" });
  } catch (error) {
    console.log(error);
  }
};

exports.checkTodo = async (req, res) => {
  const { id } = req.params;
  const { complete } = req.body;
  const { user_id } = req?.auth;
  try {
    const checkTodo = await Todo.CheckTodo({ id, complete, user_id });
    res.json({ status: 200, message: "succes check" });
  } catch (error) {
    console.log(error);
  }
};
