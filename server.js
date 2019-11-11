const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.checkout(() => {
  console.log('I honestly dont know what this does')
})

