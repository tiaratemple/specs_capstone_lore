import "../recipePage/RecipePage.css";
import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import AddRecipe from "../../components/addRecipe/AddRecipe";

const RecipeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);

  const { userId } = useContext(AuthContext);

  const getUserRecipes = useCallback(() => {
    axios
      .get(`/recipes/${userId}`)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    getUserRecipes();
  }, [getUserRecipes, recipes]);

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
      <button onClick={() => addNewRecipe()}>Add new recipe</button>
      {showAddRecipeForm && (
        <button onClick={() => hideForm()}>Hide Form</button>
      )}
      {showAddRecipeForm && <AddRecipe />}
    </>
  );
};

export default RecipeScreen;
