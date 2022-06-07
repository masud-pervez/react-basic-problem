import React, { useState } from "react";

export default function NewTodo({onTodo}) {
  
  const [todo, setTodo] = useState("");

  const handleInputChange = (event) =>{
    setTodo(event.target.value)
  }

  const handlesubmit = (event)=>{
    event.preventDefault();
    onTodo(todo);
  }

  return (
    <form onSubmit={handlesubmit}>
      <label className="form-label" htmlFor="todo">
        New Todo
      </label>
      <input
        type="text"
        className="form-control"
        id="todo"
        name="todo"
        value={todo}
        onChange={handleInputChange}
      />

      <button className="btn btn-danger my-4">Add todo</button>
    </form>
  );
}
