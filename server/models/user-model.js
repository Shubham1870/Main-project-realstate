const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    Email: { type: String, unique: true,required:true },
    Password: { type: String,required:true },
    
})
const Usermodel= mongoose.model("User",UserSchema)

module.exports=Usermodel