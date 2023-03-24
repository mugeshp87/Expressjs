const helmet = require("helmet");
const express=require('express')
const app=express()
app.use(helmet())
console.log(app.use(helmet.contentSecurityPolicy()))
console.log(app.use(helmet()));
app.listen(2700)