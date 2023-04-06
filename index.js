const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hye hye!')
})

app.get('/bye', (req, res) => {
    res.send('bye gerak dulu')
  })

app.post('/register', (req, res) => {
    res.send('gollazo')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})