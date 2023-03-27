const express = require("express");
const app = express();
const PORT = 3000;
const port1 = 2700;

app.all("/products", function (req, res, next) {
  console.log("product Api Called");
  res.send("data");
  next();
});
app.all("/api/*", (req, res) => {
  res.send("data not found");
});
app.delete("/delete", (req, res) => {
  res.send("DELETE request");
});

app.disable(port1);
console.log(app.get(port1));
console.log(app.disabled(port1));
app.enable(port1);
console.log(app.get(port1));
console.log(app.enabled(port1));
app.engine("home", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("home.ejs");
});
console.log(app.get("title"));

app.set("title", "EXpress");
console.log(app.get("title"));
app.get('/get', (req, res) => {
    res.send('GET request')
  })
  
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT ", PORT);
});
