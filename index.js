const express = require('express')
const app = express();
const path = require('path')
const bcrypt = require('bcrypt')
const ejs = require('ejs')
const public = express.static('public');
const mongoose = require('mongoose');
const collection = require('./models/model')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
mongoose.connect('mongodb://localhost:27017/login')
.then(()=>{
  console.log("connected to mongoDB");
})
.catch((err)=>{
  console.log(err);
})

app.use(public);

app.set('view engine', 'ejs')

app.get('/login',(req,res)=>{
  res.render('login')
})
app.get('/signup',(req,res)=>{
  res.render('signup')
})
// app.get('/home',(req,res)=>{
//   res.render('home')
// })
app.post('/signup',async (req,res)=>{
    data= {
            name:req.body.username,
            email:req.body.email,
            password:req.body.password
          }
 // check if the user already exist in the database
    const existingUser = await collection.findOne({email:data.email})
    if(existingUser){
      res.send("Email already exist! Try another email");
    }
    else{
       // trying to hashed password using bcrypt 
       const Salt = 10;
       const hashedPassword = await bcrypt.hash(data.password,Salt)
       data.password = hashedPassword;

      const userdata = await collection.insertMany(data);
      res.redirect('/signup')
      console.log(userdata);  
    }
     })        

app.post('/login',async (req,res)=>{
  try{
    const check = await collection.findOne({email:req.body.email})
   if(!check){
    res.send("Invalid Email address");
   } 
  const isPasswordMatch = await bcrypt.compare(req.body.password,check.password)  
  if(isPasswordMatch){
    res.render("home")
  } else{
    res.send("wrong password")
  }
  }
  catch{
    res.send("wrong details")
  }
})     


app.listen(process.env.PORT | 3030 , ()=>{
    console.log("connected to port 3030");
})