import express from "express";
import mongoose from "mongoose";
import Product from "./models.js";
import Orders from "./ordersmodel.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9000;

const uri =
  "mongodb+srv://newadmin:12345@cluster0.m2pvdy0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (e) => console.log(`Error : ${e}`));

app.use(express.json());
app.use(cors());

app.get("/getdata", (req, res) => {
  console.log("Requesting Data");

  Product.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("Data Fetched!!!");
      res.status(200).send(data);
    }
  });
});

app.get("/alltransactions", (req, res) => {
  console.log("Getting all Transactions");
  const sort = { date: -1 };
  Orders.find()
    .sort(sort)
    .exec((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log("Data Send!!!");
        res.status(200).send(data);
      }
    });
});

app.post("/addproduct", (req, res) => {
  const message = req.body;
  console.log(message);
  Product.create(message, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("Data Send!!!");
      res.status(200).send(data);
    }
  });
});

app.post("/update", (req, res) => {
  console.log(req.body);
  if (req.body.incBy !== undefined)
    Product.findOneAndUpdate(
      { barcode: req.body.barcode },
      { $inc: { count: parseInt(req.body.incBy) } },
      (err, data) => {
        if (err) res.send(err);
        else if (!data) res.status(204).send("Invalid Barcode");
        else res.status(200).send("Updated Success");
      }
    );
  else {
    Product.findOneAndUpdate(
      { barcode: req.body.barcode },
      { $inc: { count: -parseInt(req.body.decBy) } },
      (err, data) => {
        if (err) res.send(err);
        else if (!data) res.status(204).send("Invalid Barcode");
        else res.status(200).send("Updated Success");
      }
    );
  }
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.status(200).send("success");
});

app.post("/orders", (req, res) => {
  console.log(req.body);
  let message = req.body;
  message = { ...message, date: new Date() };
  Orders.create(message, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("Data Send!!!");
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on Local Host : ${port}`);
});
