const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.cookie("jwt","tokenvalue");
    res.send("What the fuck dude");
})

app.listen(port,()=>{
    console.log(`app running on ${port}`)
})