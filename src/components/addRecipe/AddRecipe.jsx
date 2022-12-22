import React from "react";
import { Formik } from "formik";
import "../addRecipe/AddRecipe.css";

const NewRecipeScreen = () => {
  const initialValues = {
    type: "",
    recipeName: "",
    passedOnFrom: "",
    prep: "",
    ingredients: "",
    instructions: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="form-container">
      <h1 className="form-h1-styles">Add a Recipe</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-row-top">
              <input
                type="text"
                value={values.recipeName}
                name="recipeName"
                placeholder="Name"
                onChange={handleChange}
              ></input>
              <input
                type="text"
                value={values.passedOnFrom}
                name="passedOnFrom"
                placeholder="Passed on from"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-prep">
              <input
                type="text"
                value={values.prep}
                name="prep"
                placeholder="Prep"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-row-3">
              <textarea
                type="text"
                value={values.ingredients}
                name="ingredients"
                placeholder="ingredient ingredient ingredient"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-row-4">
              <textarea
                type="text"
                value={values.instructions}
                name="instructions"
                placeholder="Instructions"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="btn-container">
              <button className="save-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
