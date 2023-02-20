const express = require('express')
const UserRoute = express.Router()
const {usermodel} = require('../model/user.model.js')
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt')

UserRoute.get('/',async(req,res)=>{
    try{
       let data = await usermodel.find() 
       res.send(data)
    }
    catch(err){
        res.send({'err':err.message})  
    }
})

UserRoute.post('/signup',async(req,res)=>{
    //console.log(req.body)
    try{
       let {email,pw} = req.body
       bcrypt.hash(pw, 3, async(err, hash)=> {
         // Store hash in your password DB.
         if(err){
            res.send({'unable to register, err':err.message})
         }else{
            let User = new usermodel({email,pw:hash})
            await User.save()
            res.send('user registered !')
         }
     });
      
    }
    catch(err){
       res.send({'err':err.message})
    }
})


UserRoute.post('/login',async(req,res)=>{
   let {email,pw} = req.body
    try{
      let user = await usermodel.find({email})
      console.log(user)
       if(user.length > 0 ){
             bcrypt.compare(pw, user[0].pw, (err, result)=> {
             if(result){
             let token = jwt.sign({ uderId:user[0]._id }, 'masai');
              //*userId* is used in middleware to create individual data _userwise
             res.send({'msg':'user login !',"token":token})
             }
             else{
               res.send('wrong pw !')
             }
        })}else{
         res.send({'err':'user not found !'})
          }  
    }
    catch(err){
       res.send({'err':err.message})
    }
})

module.exports={UserRoute}


