import './App.css'
import {Link} from 'react-router-dom';
import Allroutes from './AllRouts';

function App() {

  return (
    <div  >
      <div style={{backgroundColor:'red', display:'flex',gap:'10px',padding:'5px'}}>
       <Link to='/'>Home  </Link>
       <Link to='/notesmanager'>Notesmanager</Link>
       <Link to='/notes'>Notes</Link>
       <Link to='/signup'>Signup/</Link>
       <Link to='/login'>Login</Link>
      </div>
      <Allroutes/>
    </div>
  )
}

export default App
