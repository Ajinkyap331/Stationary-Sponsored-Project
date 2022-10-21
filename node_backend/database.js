const express = require("express")
const cors = require("cors")
var bodyParser = require('body-parser');

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:admin@cluster0.c7v5d8z.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);


//express
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 9000



// post [Employee]
// app.post('/employee', (req, res) => {
//     EmployeeModel.insertMany({
//         name: req.body.name,
//         username: req.body.username,
//         password: req.body.password
//     })
//     res.end("success")
// })

// // get [EMPLOYEE]
// app.get('/employee', (req, res) => {
//     EmployeeModel.find((err, result) => {
//         res.send(result)
//     })
// })

const database = client.db('database');

async function run(req) {
    try {
        const products = database.collection("products")
        const data = {
            name: req.body.name,
            count: req.body.count,
            barcode: req.body.barcode,
            inDate:  new Date().toLocaleString(),
            price: req.body.price
        }
        const result = await products.insertOne(data)
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
    finally {
        await client.close()
    }
}

// post [Products]
app.post('/products', (req, res) => {
    run(req).catch(console.dir)
    res.end("success")
})

// get [Products]
app.get('/products', (req, res) => {
    const products = database.collection("products")
    res.send(products.find({}))
    // console.log(products)
    // ProductModel.find((err, result) => {
    //     res.send(result)
    // })
})

app.listen(port, () => { console.log(`Listen on port ${port}`) })




