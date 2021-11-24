import React from "react";

function CategoryFilter( {categories, handleFilter, categoryFilter} ) {
  const categoryButton = categories.map((category) => {
    return (<button 
    className={categoryFilter === category ? "selected" : ""} 
    key={category} 
    value={category} 
    onClick={handleFilter}>{category}
    </button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;