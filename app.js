// Reuired File

const express = require("express")
const cors = require("cors")
const mongoose= require("mongoose")

// Instantiate Express

const app = express()

// Middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

// MongoDB Connection

const url = ""
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true,
  useCreateIndex:true
})
.then(() => {
  console.log("MongoDB Connected…")
}).catch(err => console.log(err))


// Require Route 

const exampleRoute = require("./routes/exampleRoute")
const userRoute = require("./routes/userRoutes")

// Adding url

app.use('/',exampleRoute)
app.use('/user',userRoute)


// Adding port to run node app

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
