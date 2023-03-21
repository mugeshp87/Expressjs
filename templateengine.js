const express = require('express')
const app = express()
const port = 3000

app.get('/te', (req, res) => {
  res.render('template engine',{title:'html TE',message:'Hi There'})
})