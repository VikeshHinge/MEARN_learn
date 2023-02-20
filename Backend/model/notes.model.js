const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title:String,
    status:Boolean,
    user:String
})

const notesmodel = mongoose.model('note',noteSchema)

module.exports={notesmodel}