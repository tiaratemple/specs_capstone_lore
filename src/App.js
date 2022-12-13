import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./components/home/HomeScreen";
import NewRecipeScreen from "./components/recipes/NewRecipeScreen";
import RecipeScreen from "./components/recipes/RecipeScreen";
import NewStoryScreen from "./components/stories/NewStoryScreen";
import StoryScreen from "./components/stories/StoryScreen";
import NewAdviceScreen from "./components/advice/NewAdviceScreen";
import AdviceScreen from "./components/advice/AdviceScreen";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
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
