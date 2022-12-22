import React from "react";
import { Formik } from "formik";
import "../addStories/AddStories.css";

const NewStoryScreen = () => {
  const initialValues = {
    type: "",
    stories: "",
    storyBy: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="new-story-container">
      <h1 className="new-story-title">Stories</h1>
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

export default NewStoryScreen;
