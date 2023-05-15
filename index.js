require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require("cors");
const router = require("./src/routes/index");

const swaggerFile = require("./openapi");
const swaggerUI = require("swagger-ui-express");

app.use(express.json());
app.use(cors());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

module.exports = app;
