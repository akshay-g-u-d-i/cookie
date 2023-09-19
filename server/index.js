const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {

    // res.header('Access-Control-Allow-Origin', 'https://cookiebyakshay.netlify.app');
    res.header('Access-Control-Allow-Credentials', true);
    res.cookie("itupp", "tokenvalue", {
        sameSite: "none",
        secure: true,
        httpOnly: false
    });
    res.status(200).json("Hello frontend this is backend");
})

app.listen(port, () => {
    console.log(`app running on ${port}`)
})