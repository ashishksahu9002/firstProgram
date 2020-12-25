const User = require("../models/userModel")

const addUser = (req,res)=>{ 
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        bio:req.body.bio,
        dob:req.body.dob,
        adult:req.body.adult
    })

    user.save((err,saved)=>{
        if(err){
            return res.status(400).json({
                message:"failed to add data",
                err
            })
        }
        else{
            return res.status(200).json({
                message:"Data uploaded",
                saved
            })
        }
    })
}

module.exports = addUser
