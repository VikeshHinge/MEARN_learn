import React,{useState} from "react";

let Note = {
    title:'',
    status:false
}
const NotesManage = (payload) => {

    fetch('http://localhost:4040/note/addnotes',{
        method:'POST',
        headers:{
            "Content-type":"application/json",
            "authorization":localStorage.getItem('token') //***To varify token*** */
        },
        body:JSON.stringify(payload)
    }).then(res => res.json())
    .then(res =>console.log(res))
    .catch(err => console.log(err))
}

export const Notes = () => {
    let [note,setNote] = useState(Note)

    const checknote = (e) => {
       let {name,value} = e.target;
       setNote({...note,[name]:value})
      
    }
    
    const SubmitNote = (e) => {
        e.preventDefault()
          console.log(note)
        NotesManage(note)
        setNote(Note)
    }

    return(
        <div>
            <h4>Notes Data Activity</h4>
            <form onSubmit={SubmitNote}>
            <input name='title' placeholder="title" value={note.title} onChange={checknote} type="text" /><br />
            status: <select name="status" value={note.status} onChange={checknote} >
                <option value="false">false</option>
                <option value="true">true</option>
             </select><br />
            <input type="submit" />
           </form>
           
        </div>
    )
}
