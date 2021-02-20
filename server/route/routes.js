const {getData,postData}=require('../middleware/controllers');
const express=require('express');
const router = express.Router();

router.get("/test",(req,res)=>{
    console.log("Routing Successful");
});

router.get("/",getData);
router.post("/",postData);

module.exports = router;