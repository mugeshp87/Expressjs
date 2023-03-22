const express = require('express')
const app = express()
const port = 3000
const path=require('path')

app.get('/', (req, res) => {

  res.render('index',{title:'html TE',message:'Hi There'})
})
app.get('/template', (req, res) => {

  res.render('index1.pug',{title:'html',message:'new Route'})
})
app.get('/ejs',(req,res)=>{
  app.set('view engine','ejs')
  app.use(express.static(path.join(__dirname,'public/images')))
res.render('home.ejs')
})


app.listen(port)