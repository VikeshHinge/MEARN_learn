import React, { useState } from "react";




const userSignup = async(payload) => {
    // console.log('user',payload)

    fetch('http://localhost:4040/user/signup',{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

let User = {
    email:'',
    pw:''
}

export const Register = () => {
let [user,setUser] = useState(User)

const checkuser = (e) => {
   let {name,value} = e.target;
   setUser({...user,[name]:value})
  
}

const registeruser = (e) => {
    e.preventDefault()
    //console.log(user)
    userSignup(user)
    setUser(User)
}
    return(
        <div>
            <h4>Signup</h4>
           <form onSubmit={registeruser}>
            <input name='email' placeholder="email" value={user.email}  onChange={checkuser} type="text" /><br />
            <input name='pw'placeholder="pw" value={user.pw} onChange={checkuser} type="text" /><br />
            <input type="submit" />
           </form>
        </div>
    )
}

