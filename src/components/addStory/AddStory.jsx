import { useContext } from "react";
import axios from "axios";
import { Formik } from "formik";
import "./AddStory.css";
import AuthContext from "../../store/AuthContext";

const AddStory = () => {
  const { token, userId } = useContext(AuthContext);
  const initialValues = {
    stories: "",
    storyBy: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    const { stories, storyBy } = values;

    axios
      .post(
        `/stories/addStory`,
        { stories, storyBy, userId },
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log("post", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="new-story-container">
      <h1 className="form-h1-styles">Add a Story</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="story-form-top">
              <textarea
                type="text"
                value={values.stories}
                name="stories"
                placeholder="Add story here..."
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="story-form-bottom">
              <input
                type="text"
                value={values.storyBy}
                name="storyBy"
                placeholder="Story by:"
                onChange={handleChange}
              ></input>
            </div>
            <div className="story-btn-container">
              <button className="save-story-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default AddStory;
