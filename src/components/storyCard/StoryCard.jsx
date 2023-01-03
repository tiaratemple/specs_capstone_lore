import "./StoryCard.css";

const StoryCard = ({ story }) => {
  const { stories, storyBy } = story;

  return (
    <div className="story-card-wrapper">
      <div className="story-card-container">
        <p className="story-detail">{stories}</p>
        <h3 className="story-by-title">Story By:</h3>
        <p className="story-by-detail">{storyBy}</p>
      </div>
    </div>
  );
};
export default StoryCard;
