import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h2>Todo Application</h2>
      <button className='button'>Create Task</button>
      <TodoList/>
    </div>
  );
}

export default App;
