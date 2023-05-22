const app = require("../app");

module.exports = (req, res) => {
  // Invoke your Express.js app for each request
  app(req, res);
};
