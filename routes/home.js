const express = require('express');
const router = express.Router();

//Handling request using router
router.get("/home", (req,res,next)=>{
    res.send("This is homepage request");
});

module.exports = router;