import { Formik } from "formik";
import "../addRecipe/AddRecipe.css";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../store/AuthContext";

const AddRecipe = ({ setShowAddRecipeForm }) => {
  const { token, userId } = useContext(AuthContext);
  const initialValues = {
    recipeName: "",
    passedOnFrom: "",
    prep: "",
    ingredients: "",
    instructions: "",
  };

  const onSubmit = (values) => {
    console.log("values", values);
    const { recipeName, passedOnFrom, prep, ingredients, instructions } =
      values;
    axios
      .post(
        `/recipes/addRecipe`,
        { recipeName, passedOnFrom, prep, ingredients, instructions, userId },
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log("post", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-recipe-wrapper">
      <section className="form-container">
        <div className="x-out-recipe-btn-container">
          <button
            className="x-out-advice-btn"
            onClick={() => setShowAddRecipeForm(false)}
          >
            x
          </button>
        </div>
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
                <button className="save-advice-btn" type="submit">
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default AddRecipe;
