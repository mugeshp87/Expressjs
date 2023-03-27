const express = require("express");
const router = express.Router();
router.get("/products", (req, res) => {
  res.send("lists of users");
});
router.post("/addnewproduct", (req, res) => {
  res.send("new product created");
});
router.put("/update-user", (req, res) => {
  res.send("product details Updated");
});
router.delete("/addnewuser", (req, res) => {
  res.send("prodct deleted");
});
router.get("/searchid/:value([0-9]{3})", (req, res) => {
    res.send("results for" +req.params.value);
  });
  router.get("/searchname/:value([a-zA-Z]{2})", (req, res) => {
    res.send("results for" +req.params.value);
  });
  router.get('*',(req,res)=>{
    res.send("url NOt Found")
  })
module.exports=router