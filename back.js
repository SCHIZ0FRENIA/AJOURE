import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from "express";
import cors from "cors";
const MongoClient = require('mongodb').MongoClient;

const app = express();

const PORT = 7777;
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

app.use(cors());
app.use(express.json());

app.post('/client/add', async (req, res) => {
  try {
    let document = req.body;
    await mongoClient.connect();
    const db = mongoClient.db("Ajoure");
    const collection = db.collection("clients");
    const result = await collection.insertOne(document);
    console.log(result);
    console.log(document);
  }catch(err) {
    console.log(err);
  } finally {
    await mongoClient.close();
  }
  return res.json({message: "sucsess"});
});

app.get("/getusers", async (req, res) => {
  await mongoClient.connect();
  const db = mongoClient.db("Ajoure");
  const collection = db.collection("clients");
  const users = await collection.find().toArray();
  console.log(users);
  res.send(users);
});

app.listen(PORT, err => {
  if(err) {
    return console.log(err);
  }
  console.log('server is ok');
});