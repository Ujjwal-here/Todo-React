import './App.css';
import TodoList from './components/TodoList';
import {FaPlusCircle} from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <h2>Todo Application</h2>
      <button className='button'><FaPlusCircle/>Create Task</button>
      <TodoList/>
    </div>
  );
}

export default App;
