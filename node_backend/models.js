import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: String,
    barcode: String,
    count: Number
})

export default mongoose.model('product', ProductSchema)