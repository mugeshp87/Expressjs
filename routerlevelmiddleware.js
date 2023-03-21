// const express = require('express')
// const app = express()
// const router = express.Router()

// router.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })


// router.use('/user/:id', (req, res, next) => {
 
//     console.log('Request URL:', req.originalUrl)
//   next()
// })
// router.get('/user/:id', (req, res, next) => {
   
//     if (req.params.id === '0') next('route')
  
//     else next();
//     {
//         console.log('user 0')
//     }
//   }, (req, res, next) => {
//    res.render('regular')
//   })
//   router.get('/user/:id', (req, res, next) => {
//     console.log(req.params.id)
//     res.send('special')
//   })

// app.listen(3000)
const express = require('express')
const app = express()
const router = express.Router()

// predicate the router with a check and bail out when needed
router.use((req, res, next) => {
  if (!req.headers['x-auth']) return next('router')
  next()
})

router.get('/user/:id', (req, res) => {
  res.send('hello, user!')
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
// use the router and 401 anything falling through
app.use('/admin', router, (req, res) => {
    res.sendStatus(401)
})
app.listen(3000)
