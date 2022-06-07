import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todo from './Todo'

// const dummytodos = ["todo1","todo2"]

export default function TodoApp() {

  const [todos,setTodos] = useState([]);

  const handleNewTodo =(newTodo) =>{
    setTodos([...todos , newTodo]);
  };

  return (
    <div>
      <NewTodo onTodo={handleNewTodo}/>
      <Todo todos={todos}  />
    </div>
  )
}
