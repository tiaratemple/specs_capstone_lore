import React, { useContext } from "react";
import Header from "./components/header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from "./components/home/HomeScreen";
import NewRecipeScreen from "./components/recipes/NewRecipeScreen";
import RecipeScreen from "./components/recipes/RecipeScreen";
import NewStoryScreen from "./components/stories/NewStoryScreen";
import StoryScreen from "./components/stories/StoryScreen";
import NewAdviceScreen from "./components/advice/NewAdviceScreen";
import AdviceScreen from "./components/advice/AdviceScreen";
import Auth from "./components/Auth";
import AuthContext from "./store/AuthContext";
import { useLocation } from "react-router-dom";

const App = () => {
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/auth" && <Header />}
      <main>
        <Routes>
          <Route
            path="/auth"
            element={!authCtx.token ? <Auth /> : <Navigate to="/" />}
          />
          <Route index element={<HomeScreen />} />
          <Route path="/newRecipe" element={<NewRecipeScreen />} />
          <Route path="/recipe/:id" element={<RecipeScreen />} />
          <Route path="/newStory" element={<NewStoryScreen />} />
          <Route path="/story/:id" element={<StoryScreen />} />
          <Route path="newAdvice" element={<NewAdviceScreen />} />
          <Route path="/advice:id" element={<AdviceScreen />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
