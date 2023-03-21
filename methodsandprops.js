const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});
app.response.sendStatus = function (statusCode, type, message) {

    return this.contentType("application/json").status(404).send("not found");

};
app.get("/no", (req, res) => {
  res.sendStatus();
});
Object.defineProperty(app.request,'ip',{
    configurable:true,
    enumerable:true,
    get()
    {
        return this.get('Client-IP')
    }
})
app.listen(3000);
