require("dotenv").config();
const jwt = require("jsonwebtoken");
const { unAuthorization } = require("../utils/responseApi");
exports.verifyUser = (req, res, next) => {
  const header = req.headers["authorization"];

  jwt.verify(header, process.env.JWT_SECRET, (err, data) => {
    if (err && err.message == "jwt expired") {
      res.status(401).json(unAuthorization("Token is Expires"));
      return;
    } else if (err) {
      res.status(401).json(unAuthorization("Invalid signature"));
      return;
    }
    req.auth = { user_id: data.id, email: data.email };
    next();
  });
};
