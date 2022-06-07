import React from 'react'
import Todoo from './Todoo';

export default function Todo(props) {
  return (
    <div>
        {props.todos.map((todo ,inx) => (
          <Todoo key={inx} todo={todo} />
        ))}
    </div>
  )
}
