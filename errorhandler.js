const express=require('express')
const fs=require('fs')
const app = express()

app.get('/', (req, res) => {
    throw new Error('error handler ') 
  })
  app.get('/file', (req, res,next) => {
    fs.readFile('filename.txt',(err,data)=>{
        if(err)
        {
            next(err)
        }
        else{
            res.send(data)
        }
    })
  })

  app.listen(2700)
