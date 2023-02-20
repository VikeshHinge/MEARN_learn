import React,{useState} from "react";

let User = {
    email:'',
    pw:''
}
const userLogin = (payload) => {

    fetch('http://localhost:4040/user/login',{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        localStorage.setItem('token',res.token)
    })
    .catch(err => console.log(err))
}

export const Login = () => {
    let [user,setUser] = useState(User)

    const checkuser = (e) => {
       let {name,value} = e.target;
       setUser({...user,[name]:value})
      
    }
    
    const loginuser = (e) => {
        e.preventDefault()
       //console.log(user)
        userLogin(user)
        setUser(User)
    }

    return(
        <div>
            <h4>LoginUser</h4>
            <form onSubmit={loginuser}>
            <input name='email' placeholder="email" value={user.email} onChange={checkuser} type="text" /><br />
            <input name='pw'placeholder="pw" value={user.pw} onChange={checkuser} type="text" /><br />
            <input type="submit" />
           </form>
        </div>
    )
}
