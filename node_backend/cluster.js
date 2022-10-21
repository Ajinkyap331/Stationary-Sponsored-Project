// mongodb+srv://admin:admin@cluster0.oa0a6rp.mongodb.net/?retryWrites=true&w=majority

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:admin@cluster0.c7v5d8z.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('database');
        const products = database.collection("products")
        const result = await products.insertOne({ one: "two" })
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
    finally {
        await client.close()
    }
}

run().catch(console.dir)
