import './App.css';
import TodoList from './components/TodoList';
import {FaPlusCircle} from "react-icons/fa"
import CreateTask from './components/CreateTask';
import {useState} from "react"

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <p className='header'>Todo Application</p>
      <button className='button' onClick={handleShow}><FaPlusCircle/>Create Task</button>
      <TodoList/>
      <CreateTask show={show} handleClose={handleClose} handleShow={handleShow}/>
    </div>
  );
}

export default App;
