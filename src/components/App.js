import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Categories:", {CATEGORIES})
console.log("Tasks:", {TASKS})

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const displayableTasks = tasks.filter((task) => {
    if(category === "All"){
      return true
    }else {
      return task.category === category
    }
  })

  function handleDelete (event) {
    const updatedTasks = tasks.filter((task) => {
      return task.text !== event.target.name
    })

    setTasks(updatedTasks)
  }

  function handleFilter (event) {
    setCategory(event.target.value)
  }
  
  function onTaskFormSubmit (formData) {
    setTasks([...tasks, formData])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryFilter={category} categories={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList tasks={displayableTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;