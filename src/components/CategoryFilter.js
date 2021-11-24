import React from "react";

function CategoryFilter( {categories, handleFilter, filterBy} ) {
  const categoryButton = categories.map((category) => {
    return (<button className={filterBy === category ? "selected" : ""} key={category} value={category} onClick={handleFilter}>{category}</button>)
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;