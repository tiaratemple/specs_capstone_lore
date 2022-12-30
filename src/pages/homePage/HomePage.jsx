import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../homePage/HomePage.css";
import AuthContext from "../../store/AuthContext";
import { useTypingText } from "./useTypingText";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`/${userId}`)
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const { word } = useTypingText(
    ["recipes.", "stories.", "advice.", "family traditions."],
    130,
    20
  );

  return (
    <div className="homepage-content-container">
      <div>
        <h1 className="home-welcome-stmt">Welcome to Lore, {username}.</h1>
      </div>
      <div className="welcome-banner">
        <div className="banner-text-container">
          <h1 className="banner-preserve">Preserve {word}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
