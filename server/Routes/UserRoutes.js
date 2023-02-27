const express=require("express")
const router=express.Router()
const bodyparser=require("body-parser")
const bcrypt=require("bcrypt")
const dotenv=require("dotenv")
const usermodel=require("../models/user-model")
const cors=require("cors")

dotenv.config()
router.use(cors())

router.post("/SignUp",async(req,res)=>{
    try{
const {email,password,confirmpassword}=req.body
if(!email&&password&&confirmpassword){
    res.status(400).json({
        status:"failed",
        message:"All fields are mandatory"
    })
}
const present=await usermodel.findOne({email})
if(present){
    res.status(400).json({
        status:"failed",
        message:"User already Registered"
    })
}
const hash=await bcrypt.hash(password,10)
if(password===confirmpassword){
    const user=await usermodel.create({
        email:email.toLowerCase(),
        password:hash
      })
    res.status(200).json({
        status:"success",
        message:"signup succesfull",
        user
    })
}else{
    res.status(400).json({
        status:"failed",
        message:"Password You entered do not match"
    })
}
    }
    catch(error){
       res.status(400).json({
        status:"failed",
        message:error.message
       })
    }
})

router.post("/SignIn",async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email&&password){
            res.status(400).json({
                status:"failed",
                message:"All fields required"
            })
        }
        const data=await usermodel.findOne({email})
        if(!email){
            res.status(400).json({
                status:"failed",
                message:"user not registered"
            })
        }else{
            if(!bcrypt.compareSync(password,data.password)){
                res.status(400).json({
                    status:"failed",
                    message:"Password does not match"
                })
            }else{
                res.status(200).json({
                    status:"success",
                    data:data
                })
            }
        }
    }catch(error){
        res.status(400).json({
         status:"failed",
         message:error.message
        })
     }
})
module.export=router