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
      res.json(success("OK", { data: "Some random data" }, res.statusCode));
    }
  } catch (error) {
    res.json({ status: error.status });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const result = await User.getUsers();
    return res.status(200).json(success("OK", result, 200));
  } catch (error) {
    console.log(error);
  }
};

exports.getUserById = (req, res) => {
  res.send("get User list by id");
};

exports.updateUserById = (req, res) => {
  res.send("update  User list");
};

exports.deleteUser = async (req, res) => {
  const { email } = req.params;
  console.log(req.params);
  const checkUser = await User.checkEmail(email);
  console.log(checkUser);
  if (!checkUser) {
    res
      .status(400)
      .json({ message: "This user has already deleted", code: 400 });
  } else {
    try {
      const result = await User.destroy({ where: { email } });
      return res
        .status(200)
        .json({ message: "User deleted successfully", code: res.statusCode });
    } catch (error) {
      console.log(error);
    }
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await User.authenticate({ email, password });
    if (result.error) {
      res.status(404).json({ message: result.message, code: result.code });
    } else {
      const token = await generateJWT(result.id, result.email).then(
        (res) => res
      );
      return res.json(authSuccess("OK", token, res.statusCode));
    }
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async (req, res, next) => {
  console.log("tes", req.rawHeaders[1]);

  // const { email, password } = req.body;
  // try {
  //   const result = await User.authenticate({ email, password });
  //   if (result.error) {
  //     res.status(404).json({ message: result.message, code: result.code });
  //   } else {
  //     const token = generateJWT(result.id, result.email);
  //     return res.json(authSuccess("OK", token, res.statusCode));
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
};
