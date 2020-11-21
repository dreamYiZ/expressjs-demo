const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.post('/post', function (req, res) {
  res.send('Got a POST request')
})

app.listen(port, '0.0.0.0',() => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
})