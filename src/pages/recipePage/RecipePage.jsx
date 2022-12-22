import "../recipePage/RecipePage.css";
import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext";

const RecipeScreen = () => {
  const [recipes, setRecipes] = useState([]);

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
    console.log("length", recipes.length);
  }, [getUserRecipes, recipes]);

  //show text to add recipe if no recipes exist
  return (
    <>
      <h1>Recipes</h1>
      {!recipes.length && (
        <p>No recipe has been added yet. Please add a recipe below</p>
      )}
      <button>Add new recipe</button>
    </>
  );
};

export default RecipeScreen;
