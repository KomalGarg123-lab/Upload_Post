const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://komalgarg2620_db_user:e1lO0i7KFWSNaYDY@cluster0.frbmpr2.mongodb.net/project1")
    console.log("connected DB")
}

module.exports=connectDB;