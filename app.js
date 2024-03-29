require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
// const PORT = process.env.PORT || 9000;
const cors = require("cors");
const router = require("./src/router/index");

const swaggerFile = require("./openapi");
const swaggerUI = require("swagger-ui-express");
const swaggerOptions = {
  customCssUrl: "/custom.css",
};

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use("*.css", (req, res, next) => {
  res.set("Content-Type", "text/css");
  next();
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(
    `Hey this is my API running 🥳 <a href="${process.env.BASE_URL}/docs">See documentation</a>`
  );
});
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile, swaggerOptions));
app.use("/api/v1", router);

module.exports = app;
