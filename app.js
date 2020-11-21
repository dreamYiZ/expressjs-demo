const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const fs = require('fs');


function initFiles(){
  var dir = './log';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
}

var requestTime = function (req, res, next) {
  req.requestTime = new Date();
  fs.writeFile('log/req.log', `Time:${req.requestTime},Url:${ req.protocol}://${req.get('host')}}`, function (err) {
    if (err) return console.log(err);
  });
  next()
}


initFiles();

app.use(requestTime)


app.use('/static', express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.post('/post', function (req, res) {
  res.send('Got a POST request')
})





/* istanbul ignore next */
if (!module.parent) {
  app.listen(port, '0.0.0.0',() => {
    console.log(`Example app listening at http://0.0.0.0:${port}`)
  })
}