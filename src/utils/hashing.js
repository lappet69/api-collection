require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var redis = require("redis");
var JWTR = require("jwt-redis").default;
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);

const encrypt = (password) => {
  return bcrypt.hashSync(password, 10);
};

const checkPwd = (password) => {};

const generateJWT = async (id, email) => {
  return await jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

module.exports = { encrypt, generateJWT };
