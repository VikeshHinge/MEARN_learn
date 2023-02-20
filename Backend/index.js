const express = require('express')
var cors = require('cors')
const {connection }= require('./db.js')
const {UserRoute} = require('./Routes/user.routes.js')
const {NotesRoutes} = require('./Routes/notes.roues.js')
const {authanticate} = require('./Middleware/Authmiddleware.js')

const app = express()
app.use(cors({origin:"*"})) //**** */ */
app.use(express.json())
app.use('/user',UserRoute)
app.use(authanticate) //**** */
app.use('/note',NotesRoutes)

app.get('/',(req,res)=>{
    res.send('home page')
})


app.listen(4040,async()=>{
  try{
    await connection
    console.log('connected to dbs')
  }
  catch(err){
    console.log('err:', err)
  }
    console.log('server is running on port 4040')
})