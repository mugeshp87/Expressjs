const express = require("express");
const router = express.Router();
router.get("/users", (req, res) => {
  res.send("lists of users");
});
router.post("/addnewuser", (req, res) => {
  res.send("new user created");
});
router.put("/update-user", (req, res) => {
  res.send("USER details Updated");
});
router.delete("/addnewuser", (req, res) => {
  res.send("user deleted");
});
router.get('/userdetails/:id',(req,res)=>{
  res.send('Get request for the specific user' +req.params.id)
})
router.get('/search/:name/:age',(req,res)=>{
  res.send('Deatils Got For'    +req.params.name + +req.params.age)
})
module.exports=router