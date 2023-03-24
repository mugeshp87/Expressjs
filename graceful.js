const express=require('express')
const app=express()
const port=8000
const server = app.listen(port)
cess.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})