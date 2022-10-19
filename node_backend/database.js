const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors")
var bodyParser = require('body-parser');



const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 9000



app.listen(port, () => { console.log(`Listen on port ${port}`) })

mongoose.connect("mongodb://localhost:27017/new", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const MyModel = mongoose.model('new', new mongoose.Schema({ name: String }));

app.post('/', (req, res) => {
    console.log(req.body.name)
    MyModel.insertMany({ name: req.body.name })
    res.end("success")
})

app.get('/', (req, res) => {
    MyModel.find((err, result) => {
        res.send(result)
    })
})




