
import './App.css';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import Display from './components/Display';

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodo = (newTodo) => {
    setTodos([...todos, newTodo])
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const handleDelete = (deleteIndex) => {
    const filteredList = todos.filter((t,i) => i !== deleteIndex)
    setTodos(filteredList)
  }
  
  const checked = (updateList) => {
    setTodos([...updateList])
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  
  //get item from local storage
  //todos are from local storage
  // useEffect(()=>{
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // },[todos])

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos){
      setTodos(todos)
    }
  },[])


  return (
    <div >
      <Form onNewTodo={handleTodo}/>
      <Display  todos={todos} handleDelete={handleDelete} checked={checked}/>
    </div>
  );
}

export default App;
