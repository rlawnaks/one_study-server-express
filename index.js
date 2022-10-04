const express = require("express"),
    app = express(),
    bodyParser = require("body-parser");



const port = 8000;
app.listen(port, () => {
    console.log(`SERVER ON! PORT : ${port}`)
})