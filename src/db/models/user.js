"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { error } = require("../../utils/responseApi");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static getUsers = async () => {
      return await this.findAll().then((users) =>
        users.map((user) => {
          return { fname: user.fname, lname: user.lname, email: user.email };
        })
      );
    };

    static encrypt = (password) => {
      return bcrypt.hashSync(password, 10);
    };
    checkPassword = (password) => bcrypt.compareSync(password, this.password);

    static checkEmail = async (email) => {
      const result = await this.findOne({ where: { email } });
      return result?.dataValues?.email === email ? true : false;
    };
    static store = async ({ fname, lname, email, password }) => {
      try {
        return await this.create({
          fname,
          lname,
          email,
          password: this.encrypt(password),
        });
      } catch (error) {
        console.log(error);
      }
    };
    static authenticate = async ({ email, password }) => {
      try {
        const user = await this.findOne({ where: { email } });
        if (!user) {
          return error("user not found", 400);
        }
        const isPasswordValid = user.checkPassword(password);
        if (!isPasswordValid) {
          return error("wrong password", 400);
        }
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(error.message);
      }
    };

    // static loginUser = async ({ email, password }) => {
    //   try {
    //     const user = await this.findOne({ where: { email } });
    //     if (!user) {
    //       return Promise.reject("user not found");
    //     }

    //     const isPasswordValid = user.checkPassword(password);
    //     if (!isPasswordValid) {
    //       return Promise.reject("wrong password");
    //     }
    //     console.log(user.dataValues, "user");
    //     return user;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  }
  User.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
