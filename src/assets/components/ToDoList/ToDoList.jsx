import React from 'react'
import {toDos} from '../todo/todo'
import ToDoItem from '../ToDoItem/ToDoItem'

function ToDoList() {
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {toDos.map(toDo => <ToDoItem key={toDo.id} toDo={toDo.toDo}/>)}
      </ul>
    </div>
  )
}

export default ToDoList
