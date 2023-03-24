const express=require('express')
const session=require('express-session')
const app=express()
app.set('trust proxt',1)
app.use(session({
    secret:'s3cur#',
    name:'sessionId'

}))
app.listen(2700)
