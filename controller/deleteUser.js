const User = require("../models/userModel")

const asyncHandler = require("express-async-handler")

const deleteUser = asyncHandler(async(req,res)=>{
    User.deleteOne({
        _id:req.params.id
    },(err,success)=>{
        if(err){
            res.status(400).json({
                message:"Unable to delete"
            })
        }
        else{
            res.json({
                message:"User Deleted"
            })
        }
    })
})

module.exports=deleteUser