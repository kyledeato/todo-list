import React, { useState } from 'react'

const Form = (props) => {
    const [todo, setTodo] = useState("");
    const [complete, setComplete] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTodo({todo,complete})
        setTodo("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Todo's:</label>
            <input type="hidden" name="complete" value={complete}/>
            <input type="text" value={todo} onChange={e=>setTodo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Form