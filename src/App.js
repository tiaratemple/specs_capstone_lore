import React, { useContext } from "react";
import Header from "./components/header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import RecipePage from "./pages/recipePage/RecipePage";
import StoryPage from "./pages/storyPage/StoryPage";
import AdvicePage from "./pages/advicePage/AdvicePage";
import Auth from "./utils/Authentication/Auth";
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
            path="/"
            element={
              authCtx.token ? <HomePage /> : <Navigate replace to={"/auth"} />
            }
          />
          <Route
            path="/auth"
            element={!authCtx.token ? <Auth /> : <Navigate replace to={"/"} />}
          />
          <Route
            path="/recipes/:userId"
            element={
              authCtx.token ? <RecipePage /> : <Navigate replace to={"/auth"} />
            }
          />
          <Route
            path="/stories/:userId"
            element={
              authCtx.token ? <StoryPage /> : <Navigate replace to={"/auth"} />
            }
          />
          <Route
            path="/advices/:userId"
            element={
              authCtx.token ? <AdvicePage /> : <Navigate replace to={"/auth"} />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
