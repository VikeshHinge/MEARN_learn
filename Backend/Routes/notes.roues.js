const express = require('express')
const NotesRoutes = express.Router()
const {notesmodel} = require('../model/notes.model.js')

const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt')


NotesRoutes.get('/',async(req,res)=>{
   try{
     let data = await notesmodel.find()
     res.send( data)
   }catch(err){
     res.send({'err':err})
   }
})


NotesRoutes.post('/addnotes',async(req,res)=>{
  console.log(req.body)
    try{
      let note = req.body
      let NewNote = new notesmodel(note)
      await NewNote.save()
      res.send('Notes added ')
    }catch(err){
      res.send({'err':err.message}) 
    }
})

NotesRoutes.patch('/updatenotes/:id',async(req,res)=>{
  try{
    let id = req.params.id;
    let payload = req.body;
    const note = await notesmodel.findOne({"_id":id})
    const User_id_in_Notes = note.user;
    const User_makingReq = req.body.user;
      if(User_id_in_Notes === User_makingReq){
      await notesmodel.findByIdAndUpdate({_id:id},payload)
      res.send('updated sucess !!!')
      }
      else{
      res.send('You are not Authorised for updating others Data!')
      }
  }
  catch(err){
    res.send({'err':err.message}) 
  }
})
//
NotesRoutes.delete('/deletenotes/:id',async(req,res)=>{
  try{
    let id = req.params.id
    const note = await notesmodel.findOne({"_id":id})
    const User_id_in_Notes = note.user;
    const User_makingReq = req.body.user;
    //console.log(User_id_in_Notes,User_makingReq)
      if(User_id_in_Notes === User_makingReq){
        await notesmodel.findByIdAndDelete({_id:id})
        res.send('delete sucess !!!')
      }else{
        res.send('You are not Authorised for updating others Data!')
      }
  }
  catch(err){
    res.send({'err':err.message}) 
  }
})

module.exports={NotesRoutes}



