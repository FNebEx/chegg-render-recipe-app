import React from "react";
import RecpieRowItem from "./RecipeRowItem";

/**
 * A component that will render and entire table of items. 
 */
function RecipeList({ items, onDelete }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <RecpieRowItem key={item.name} item={item} onDelete={() => onDelete(item.name)}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
