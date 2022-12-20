require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const cors = require('cors')
const router = require('./routes/index')

app.use(express.json())
app.use(cors())

app.use('/api/v1/',router)


app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`))