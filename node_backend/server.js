const express = require("express")
const cors = require("cors")
var bodyParser = require('body-parser');



const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 9000


app.get('/', (req, res) =>
    res.send({ one: "two" })
)

app.post('/user', (req, res) => {
    console.log(req.body)
    res.end("Success")
})

app.listen(port, () => { console.log(`Listen on port ${port}`) })