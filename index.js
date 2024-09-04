require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/linkedin', (req, res) => {
  res.send('Hello World!, this is Linkedin, Get your Dream Job Here')
})

app.get('/user', (req, res) => {
  res.send('<h1>Got a GET request on this URI</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})