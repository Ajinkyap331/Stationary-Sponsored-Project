const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors")
var bodyParser = require('body-parser');

// models
const EmployeeModel = mongoose.model('employee-model', new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String
}))

const ProductModel = mongoose.model('barcode-model', new mongoose.Schema({
    name: String,
    count: Number,
    barcode: String,
    inDate: String,
    price: Number
}))


//express
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 9000

// connect mongo 
mongoose.connect("mongodb://localhost:27017/new", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// EmployeeModel.deleteMany({}, () => {
//     console.log("deleted")
// })


// post [Employee]
app.post('/employee', (req, res) => {
    EmployeeModel.insertMany({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    })
    res.end("success")
})

// get [EMPLOYEE]
app.get('/employee', (req, res) => {
    EmployeeModel.find((err, result) => {
        res.send(result)
    })
})

// post [Products]
app.post('/products', (req, res) => {
    ProductModel.insertMany({
        name: req.body.name,
        count: req.body.count,
        barcode: req.body.barcode,
        inDate:  new Date().toLocaleString(),
        price: req.body.price
    })
    res.end("success")
})

// get [Products]
app.get('/products', (req, res) => {
    ProductModel.find((err, result) => {
        res.send(result)
    })
})

app.listen(port, () => { console.log(`Listen on port ${port}`) })




