import React from "react";
import Task from "./Task"

function TaskList( {tasks, handleDelete, filterBy} ) {
  const filteredTasks = tasks.filter((task) => {
    if(filterBy === "All") {
      return true
    } else {
      return task.category === filterBy
    }
  })

  const displayedTasks = filteredTasks.map((task) => {
    return ( <Task text={task.text} category={task.category} key={task.text} handleDelete={handleDelete}/> )
  })

  return (
    <div className="tasks">
      {displayedTasks}
    </div>
  )
}

export default TaskList;