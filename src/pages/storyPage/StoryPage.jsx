import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import AddStory from "../../components/addStory/AddStory";
import StoryCard from "../../components/storyCard/StoryCard";
import "./StoryPage.css";

const StoryPage = () => {
  const [stories, setStories] = useState([]);
  const [showAddStoryForm, setShowAddStoryForm] = useState(false);

  const { userId } = useContext(AuthContext);

  const getUserStories = useCallback(() => {
    axios
      .get(`/stories/${userId}`)
      .then((res) => {
        console.log("res", res);
        setStories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    getUserStories();
  }, [getUserStories]);

  const hideForm = () => {
    setShowAddStoryForm(false);
  };

  const addNewStory = () => {
    setShowAddStoryForm(true);
  };

  return (
    <>
      <h1>Stories</h1>
      {!stories.length && (
        <div className="story-p-container">
          <p className="story-p-text">
            No story has been added yet. Please add a story below.
          </p>
        </div>
      )}
      <div className="add-story-btn-container">
        <button className="add-story-btn" onClick={() => addNewStory()}>
          Add new story
        </button>
      </div>
      {showAddStoryForm && (
        <div className="x-out-story-btn-container">
          <button className="x-out-story-btn" onClick={() => hideForm()}>
            x
          </button>
        </div>
      )}
      {showAddStoryForm && <AddStory />}
      {stories &&
        stories.map((story) => {
          return <StoryCard story={story} key={story.id} />;
        })}
    </>
  );
};

export default StoryPage;
