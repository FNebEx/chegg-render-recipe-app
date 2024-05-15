import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormData);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                id=""
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                type="text"
                name="photo"
                id=""
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id=""
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                id=""
                placeholder="Preparations"
                onChange={handleChange}
                value={formData.preparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
