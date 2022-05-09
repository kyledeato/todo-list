
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Display from './components/Display';

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleDelete = (deleteIndex) => {
    const filteredList = todos.filter((t,i) => i !== deleteIndex)
    setTodos(filteredList)
  }
  
  const checked = (updateList) => {
    setTodos([...updateList])
  }
  

  return (
    <div >
      <Form onNewTodo={handleTodo}/>
      <Display  todos={todos} handleDelete={handleDelete} checked={checked}/>
    </div>
  );
}

export default App;
