import React from "react";
import { Formik } from "formik";
import "../addAdvice/AddAdvice.css";

const NewAdviceScreen = () => {
  const initialValues = {
    type: "",
    advice: "",
    adviceBy: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="new-advice-container">
      <h1 className="new-advice-title">Advice</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="advice-form-top">
              <textarea
                type="text"
                value={values.advice}
                name="advice"
                placeholder="Add advice here..."
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="advice-form-bottom">
              <input
                type="text"
                value={values.adviceBy}
                name="adviceBy"
                placeholder="Advice by:"
                onChange={handleChange}
              ></input>
            </div>
            <div className="advice-btn-container">
              <button className="save-advice-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewAdviceScreen;
