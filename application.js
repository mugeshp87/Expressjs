const express = require('express');
const app = express();
const user = express();

app.locals.email = '@gmail.com'
app.locals.name="mugesh"
app.locals.age=18
console.log(app.locals.email);
console.log(app.locals);
console.log(app.locals.age)

user.get('/', function (req, res) {
    console.log(user.mountpath); // /user
    res.send('User Homepage');
});
app.use('/user', user)
const second = express()
second.get('/', (req, res) => {
  console.log(second.mountpath) // /secr*t
  res.send('Admin Secret')
})
app.use('/second',second)

app.listen(3000)
