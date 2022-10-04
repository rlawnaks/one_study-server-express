const express = require("express"),
    app = express(),
    pool = require("./config/database")
    
app.use(express.json())
app.use(express.urlencoded({extended : false }))

app.get('/', (req, res) => {
    res.json('Hello World')
})

app.post('/', (req, res) => {
    const {name, age} = req.body
    pool((conn) => {
        conn.query("insert into tbl_user(name, age) values(? ,?)", [name, age], (err, doc) => {
            if (err) console.log(err)
            res.json({result: true})
        })
        conn.release();
    })
    
})

const port = 3030;
app.listen(port, () => {
    console.log(`SERVER ON! PORT : ${port}`)
})