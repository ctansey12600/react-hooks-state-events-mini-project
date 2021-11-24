import React, { useState } from "react";

function NewTaskForm( {onTaskFormSubmit, categories}) {
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  })

  const categoryOptions = categories.map((category) => {
    return (<option key={category} name="category" value={category}>{category}</option>)
  })

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <form className="new-task-form" onSubmit={(event) => {
      event.preventDefault()
      onTaskFormSubmit(formData)}}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select onChange={handleChange}name="category">
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
