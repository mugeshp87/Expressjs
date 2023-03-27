const express = require('express')
const app = express()
const users=require('./routes/users')
const products=require('./routes/products')
const port = 3000
app.use('/users',users)
app.use('/products',products)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})