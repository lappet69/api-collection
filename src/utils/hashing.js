require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const encrypt = (password) => {
  return bcrypt.hashSync(password, 10);
};

const checkPwd = (password, ) => {}


const generateJWT = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

module.exports = { encrypt,generateJWT };
