import express from "express";
import mongoose from "mongoose";
import Product from "./models.js";
import cors from "cors"

const app = express()
const port = process.env.PORT || 9000

const uri = "mongodb+srv://admin:admin@cluster0.c7v5d8z.mongodb.net/databasenew?retryWrites=true&w=majority"

mongoose.connect(uri)

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    Product.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post('/', (req, res) => {
    const message = req.body

    Product.create(message, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post('/add', (req, res) => {
    console.log(req.body)
    if (req.body.incBy !== undefined)
        Product.findOneAndUpdate({ "barcode": req.body.barcode }, { $inc: { count: parseInt(req.body.incBy) } }, (err, data) => {
            if (err) res.send(err)
            else if (!data) res.send("Invalid Barcode")
            else res.send("Updated Success")
        })
    else {
        Product.findOneAndUpdate({ "barcode": req.body.barcode }, { $inc: { count: - parseInt(req.body.decBy) } }, (err, data) => {
            if (err) res.send(err)
            else if (!data) res.send("Invalid Barcode")
            else res.send("Updated Success")
        })
    }
})

app.listen(port, () => {
    console.log(`Listening on Local Host : ${port}`)
})