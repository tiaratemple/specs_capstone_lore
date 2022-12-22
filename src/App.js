import React, { useContext } from "react";
import Header from "./components/header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from "./pages/homePage/HomePage";
import NewRecipeScreen from "./components/addRecipe/AddRecipe";
import RecipeScreen from "./pages/recipePage/RecipePage";
import NewStoryScreen from "./components/addStories/AddStories";
import StoryScreen from "./pages/storiesPage/StoriesPage";
import NewAdviceScreen from "./components/addAdvice/AddAdvice";
import AdviceScreen from "./pages/advicePage/AdvicePage";
import Auth from "./utils/Authentication/Auth";
import AuthContext from "./store/AuthContext";
import { useLocation } from "react-router-dom";

const App = () => {
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  console.log("authctx", authCtx);
  return (
    <div className="App">
      {location.pathname !== "/auth" && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/auth"
            element={!authCtx.token ? <Auth /> : <Navigate to="/" />}
          />
          <Route path="/newRecipe" element={<NewRecipeScreen />} />
          <Route path="/recipes/:userId" element={<RecipeScreen />} />
          <Route path="/newStory" element={<NewStoryScreen />} />
          <Route path="/stories/:userId" element={<StoryScreen />} />
          <Route path="newAdvice" element={<NewAdviceScreen />} />
          <Route path="/advices/:userId" element={<AdviceScreen />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
