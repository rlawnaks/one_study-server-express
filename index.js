const express = require("express"),
    app = express()
    pool = require("./config/database")
    
app.use(express.json())
app.use(express.urlencoded({extended : false }))

app.get('/', (req, res) => {
    res.json({ result: true })
})

const port = 3030;
app.listen(port, () => {
    console.log(`SERVER ON! PORT : ${port}`)
})