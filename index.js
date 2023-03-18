const express = require('express')
const app = express()
const port = 3000

app.get('/get', (req, res) => {
  res.send('Get Method')
})
app.post('/hello',(req,res)=>{
    res.send('writng post method')
app.delete('dele',(req,res)=>{
    res.send('delete method')
})
app.use(express.static('files'))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})