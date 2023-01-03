import { RiHandHeartLine } from "react-icons/ri";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const { recipeName, passedOnFrom, prep, ingredients, instructions } = recipe;
  return (
    <div className="recipe-card-wrapper">
      <div className="recipe-card-container">
        <h1 className="recipe-card-title">{recipeName}</h1>
        <h3 className="prep-title">Prep:</h3>
        <p className="prep-details">{prep}</p>
        <h3 className="ingredients-title">Ingredients:</h3>
        <p className="ingredients-detail">{ingredients}</p>
        <h3 className="instructions-title">Instructions:</h3>
        <p className="instructions-detail">{instructions}</p>
        <h3 className="passed-on-title">
          <RiHandHeartLine /> Passed on with love from:
        </h3>
        <p className="passed-on-detail">{passedOnFrom}</p>
      </div>
    </div>
  );
};
export default RecipeCard;
