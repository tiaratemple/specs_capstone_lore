import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../homePage/HomePage.css";
import AuthContext from "../../store/AuthContext";

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

  return (
    <div>
      <h1 className="home">Welcome {username}.</h1>
    </div>
  );
};

export default HomePage;
