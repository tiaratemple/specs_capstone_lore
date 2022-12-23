import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import AddRecipe from "../../components/addRecipe/AddRecipe";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import "./RecipePage.css";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);

  const { userId } = useContext(AuthContext);

  const getUserRecipes = useCallback(() => {
    axios
      .get(`/recipes/${userId}`)
      .then((res) => {
        console.log("res", res);
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    getUserRecipes();
  }, [getUserRecipes]);

  const hideForm = () => {
    setShowAddRecipeForm(false);
  };

  const addNewRecipe = () => {
    setShowAddRecipeForm(true);
  };
  return (
    <>
      <h1>Recipes</h1>
      {!recipes.length && (
        <p>No recipe has been added yet. Please add a recipe below</p>
      )}
      <div className="add-recipe-btn-container">
        <button className="add-recipe-btn" onClick={() => addNewRecipe()}>
          Add new recipe
        </button>
      </div>
      {showAddRecipeForm && (
        <button className="x-out-form-btn" onClick={() => hideForm()}>
          x
        </button>
      )}
      {showAddRecipeForm && <AddRecipe />}
      {/* Recipe card should only show if we have recipes */}
      {recipes &&
        recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} key={recipe.id} />;
        })}
    </>
  );
};

export default RecipePage;
