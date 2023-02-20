import React from "react";
import {Routes,Route} from 'react-router-dom';
import { Home } from "./home";
import { Login } from "./login";
import {Register} from './Register';
import { Notes } from "./notes";
import { NotesData } from "./NoteData";
const Allroutes = () => {

return(
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/notes' element={<NotesData/>}>Notes</Route>
        <Route path='/notesmanager' element={<Notes/>}></Route>
    </Routes>
)

}

export default Allroutes;