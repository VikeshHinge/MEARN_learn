
const jwt=require("jsonwebtoken")

const authanticate = (req,res,next)=>{
    const token = req.headers.authorization;
   // console.log(token)
    if(token){
        jwt.verify(token,'masai',(err,decoded)=>{
            if(decoded){
                //console.log(decoded) manupulate req here *****
                req.body.user = decoded.uderId
                next()
            }else{
                res.send({'msg':err})
            }
        })
    }else{
        res.send({'msg':'please Login !'})
    }
}

module.exports= {authanticate}
