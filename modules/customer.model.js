const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name:{type:String,require:true},
    old:{type:Number}
})
module.exports = mongoose.model('customer',customerSchema)