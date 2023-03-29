const { User } = require("../db/models");
const { generateJWT } = require("../utils/hashing");
const {
  success,
  error,
  validation,
  authSuccess,
} = require("../utils/responseApi");

exports.createUser = async (req, res, next) => {
  const { fname, lname, email, password } = req.body;
  try {
    const checkEmail = await User.checkEmail(email);
    if (checkEmail) {
      return res
        .status(400)
        .json(error("Email is already in use", res.statusCode));
    }

    const newUser = await User.store({
      fname,
      lname,
      email,
      password,
    });

    if (newUser) {
      res.json(success("OK", res.statusCode));
    }
  } catch (error) {
    res.json({ status: error.status });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const result = await User.getUsers();
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getUserById = (req, res) => {
  res.send("get   User list by id");
};

exports.updateUserById = (req, res) => {
  res.send("update  User list");
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.destroy({ where: { id } });
    return res.json("deleted");
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await User.authenticate({ email, password });
    const token = generateJWT(result.id, result.email);
    return res.json(authSuccess("OK", token));
  } catch (error) {
    console.log(error);
  }
};
