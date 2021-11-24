import React from "react";
import Task from "./Task"

function TaskList( {tasks, handleDelete} ) {
  const displayedTasks = tasks.map((task) => {
    return (
       <Task 
       text={task.text} 
       category={task.category} 
       key={task.text} 
       handleDelete={handleDelete}
       /> )
  })

  return (
    <div className="tasks">
      {displayedTasks}
    </div>
  )
}

export default TaskList;