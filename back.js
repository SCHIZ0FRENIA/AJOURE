import express from "express";
import mongoose from 'mongoose'
import cors from "cors";

const app = express();

const PORT = 7777;

const UserModel = new mongoose.Schema({
  email: {type: String, required: true},
  phone: {type: String, required: true},
  name: {type: String, required: true},
  isCons: {type: Boolean, required: true},
  answers: [
    {type: Number, required: false}
  ],
});

const Client = mongoose.model('clients', UserModel);

app.use(cors());
app.use(express.json());

app.post('/client/add', async (req, res) => {
  await mongoose.connect('mongodb://localhost:27017/Ajoure')
  .then(() => {
    console.log('db is ok');
  })
  .catch(err => {
    console.log('cant connect to db', err);
  });
  console.log(req?.body);

  try {
    const {email, number, name, isCons} = req.body;

    const doc = new Client({
      email,
      phone: number,
      name, 
      isCons,
      answers: req?.body?.answers
    });
  
    await doc.save();
    await mongoose.disconnect();
  } catch(err) {
    console.log(err.message);
  }

  return res.json({message: "sucsess"});
});

app.get("/getusers", async (req, res) => {
  await mongoose.connect('mongodb://localhost:27017/Ajoure');
  const users = await Client.find({});
  res.send(users);
  
});

app.post('/deleteuser', async (req, res) => {
  
})

app.listen(PORT, err => {
  if(err) {
    return console.log(err);
  }

  console.log('server is ok');
});