const session = require('cookie-session')
const express = require('express')
const app = express()

const expiryDate = new Date(1*60 * 60 * 1000) // 1 hour
console.log(expiryDate);

app.use(session({
  name: 'sessionstorage',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'example.com',
    path: 'foo/bar',
    expires: expiryDate
  }
  }))
  app.listen(8000)