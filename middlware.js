const express = require("express");
const app = express();
const port = 3000;
const Logger = function (req, res, next) {
  console.log("LOGGED");
  next(
    arrow()
    );
};
const arrow=()=>{
console.log('This 2nd function');
}
app.use(Logger);
app.get("/", (req, res) => {
  res.send("Responded");
});

app.listen(port);
