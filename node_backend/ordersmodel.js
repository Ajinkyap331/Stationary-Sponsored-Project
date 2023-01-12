import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    barcode: String,
    count: Number,
    date : Date,
    in : Boolean
})

export default mongoose.model('orders', OrderSchema)