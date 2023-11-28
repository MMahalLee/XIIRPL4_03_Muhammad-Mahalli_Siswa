const express = require('express');
const router = require('./router/server');
const siswaDB = require('./config/siswadb');

const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
siswaDB()

app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})