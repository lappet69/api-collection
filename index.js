require("dotenv").config();
require("pg");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require("cors");
const serverless = require("serverless-http");
const router = require("./src/routes/index");

app.use(express.json());
app.use(cors());

app.use('/api/v1/',router)
// app.get('/z',(req,res)=>{
//     res.json({'status':"sukses"})
// })

// app.use("/.netlify/functions/api", router);

// module.exports = app;
// module.exports.handler = serverless(app);
app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`))
