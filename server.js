const express = require('express')
const { MongoServerSelectionError } = require('mongodb')
const customerRouter = require('./routes/customer')
const mongoose=require('mongoose')
const indexRouter = require('./routes/index')
const methodOverride = require('method-override')
require('dotenv').config()
const app = express()

const connectFunction = async()=>{
    try{
        await mongoose.connect(process.env.STR_CONNECT)
        console.log("connected successfully")
    }catch(e)
    {
        console.log("connection failed")
    }
}
connectFunction()
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use('/customer',customerRouter)
app.use('/',indexRouter)
app.listen(process.env.PORT||3000)