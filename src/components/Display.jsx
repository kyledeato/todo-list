import React, { useState, useEffect } from 'react'
const Display = (props) => {
    
    const handleToggle = (idx) => {
        const updateList = [...props.todos]
        updateList[idx].complete = !updateList[idx].complete
        props.checked(updateList)
    }
    // useEffect(()=>{
    //     const todos = JSON.parse(localStorage.getItem('todos'));
    //     if(todos){
    //       setTodos(todos)
    //     }
    //   },[])
  return (
    <div>
         
        {props.todos.map((element,i)=>{
            return(
            <div key={i}>
                <p  style={{textDecoration: element.complete? 'line-through':'none'}}>{element.todo}</p>
                <input  type="checkbox" checked={element.complete} onChange={e=>handleToggle(i)}/>
                <button onClick={e=>props.handleDelete(i)}>DELETE</button>
            </div>
            
            )
        })
        }

    </div>
  )
}

export default Display