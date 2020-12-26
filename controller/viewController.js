// Things that is to be done here
// Reqire user model from model
// Create a view data functiuon 

const User = require("../models/userModel")

const viewData=async(req,res)=>{
    const {page=1,limit=10}=req.query;

    try{
        const details = await User.find()
        .limit(limit*1)
        .skip([page-1]*limit)
        .exec()


        const count = await User.countDocuments()

        res.status(200).json({
            details,
            totalPages:Math.ceil(count/limit),
            currentPage:page
        })
    }

    catch(err){
        res.status(400).json({
            message:"Unable to fetch data"
        })
    }
}

module.exports=viewData