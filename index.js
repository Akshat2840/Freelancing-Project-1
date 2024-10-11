import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import User from './models/userModel.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;

const url = 'mongodb+srv://gakshat885:7qQL3xoY7B4LQgKQ@akshat-db.0rkns.mongodb.net/?retryWrites=true&w=majority&appName=akshat-db'; 


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});




app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));








app.get("/" , (req , res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get("/home" , (req , res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get("/explore" , (req , res) => {
  res.sendFile(path.join(__dirname, 'public/pages/explore.html'));
})

app.get("/book" , (req , res) => {
  res.sendFile(path.join(__dirname, 'public/pages/book.html'));
})

app.get("/contact" , (req , res) => {
  // console.log("contact");
  res.sendFile(path.join(__dirname, 'public/pages/contact.html'));
})

app.post("/submit" , async (req , res) => {
  // console.log("sent");
  const { firstname, lastname, phone, email, message } = req.body;


  try {
    const newUser = new User({
      firstName:firstname,
      lastName:lastname,
      phone:phone,
      email:email,
      message:message
    });

    await newUser.save();


    // res.status(201).json({ message: 'Contact information saved successfully!' });
    console.log("Data uploaded successfully.");
    res.sendFile(path.join(__dirname, 'public/pages/contact_2.html'));

  } catch (error) {
    console.log("Error occured while saving the user data: ",error);
    // res.status(500).json({ message: 'Error saving contact information', error });
  }


})

app.get("/about" , (req , res) => {
  res.sendFile(path.join(__dirname, 'public/pages/about.html'));
})

app.get("/admin" , (req , res) => {
  res.sendFile(path.join(__dirname, 'public/pages/admin.html'));
})

app.post("/login" , async (req , res) => {
  const {username , password} = req.body;

  if(username === "Akshat" && password === "gupta"){

    try{
      const contacts = await User.find({});

      res.render("data.ejs" , { contacts });
    } catch (error) {
      console.log("Error while fetching data: ",error);
    }
  }

  else{
    res.sendFile(path.join(__dirname, 'public/pages/admin.html'));
  }

})




app.listen(port , () => {
  console.log("listening on port 3000");
})