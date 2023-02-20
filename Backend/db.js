const mongoose = require('mongoose')
//mongodb+srv://vikesh:sector4e90@cluster0.tiwvvgy.mongodb.net/AuthUser?retryWrites=true&w=majority
const connection = mongoose.connect('mongodb+srv://vikesh:sector4e90@cluster0.tiwvvgy.mongodb.net/AuthUser?retryWrites=true&w=majority')


module.exports={connection}