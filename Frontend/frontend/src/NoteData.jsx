import React,{useEffect, useState} from "react";

export const NotesData = () => {
    let [notes,setNotes] = useState([])

    const GetNotes = (payload) => {

        fetch('http://localhost:4040/note/',{
            headers:{
            "authorization":localStorage.getItem('token') //***To varify token*** */
            },
            body:JSON.stringify(payload)
        }).then(res => res.json())
        .then(res =>{
           // console.log(res)
            setNotes(res)
        })
        .catch(err => console.log(err))
    }

  useEffect(()=>{
    GetNotes()
  },[])

    return(
        <div>
            <h4>Notes Data Activity</h4>
            <div>
                {
                 notes && notes.map((ele)=>(
                    <div key={ele._id} style={{border:'2px solid',width:'300px'}}>
                    <h2>{ele.title}</h2>
                    <h4>Status:{ele.status===false?'incomplete':'Complete'}</h4>
                    <button style={{backgroundColor:'red'}}>delete</button>
                    </div>
                 ))
                }
            </div>
        </div>
    )
}
