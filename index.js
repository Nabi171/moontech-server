const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000;
require('dotenv').config();
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://db_jhon1:ReBeXSwIZqRV4wt5@cluster0.97bld.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    await client.connect();
    const collectionOne = client.db("emaJhon").collection("product");
    const collectionTwo = client.db("emaJhon").collection("moonTechProducts");
    console.log('connected to mongodb');

    try {
        // get the data from mongodb


        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = collectionOne.find(query);
            const results = await cursor.toArray();
            console.log(results);
            res.send(results);
        });
        app.get('/moonTechProducts', async (req, res) => {
            const query = {};
            const cursor = collectionTwo.find(query);
            const results = await cursor.toArray();
            console.log(results);
            res.send(results);
        });





    } finally {




    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send(' this is the new creation')
});
app.listen(port, () => {
    console.log('db connected')
})