import { useContext } from "react";
import axios from "axios";
import { Formik } from "formik";
import "./AddAdvice.css";
import AuthContext from "../../store/AuthContext";

const AddAdvice = ({ setShowAddAdviceForm, setNewAdviceAdded }) => {
  const { token, userId } = useContext(AuthContext);
  const initialValues = {
    advices: "",
    adviceBy: "",
  };

  const onSubmit = (values) => {
    const { advices, adviceBy } = values;

    axios
      .post(
        `/advices/addAdvice`,
        { advices, adviceBy, userId },
        {
          headers: { authorization: token },
        }
      )
      .then(() => {
        setShowAddAdviceForm(false);
        setNewAdviceAdded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-form-wrapper">
      <section className="new-advice-container">
        <div className="x-out-advice-btn-container">
          <button
            className="x-out-advice-btn"
            onClick={() => setShowAddAdviceForm(false)}
          >
            x
          </button>
        </div>
        <div>
          <h1 className="new-advice-title">Add Advice</h1>
        </div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="advice-form-top">
                <textarea
                  type="text"
                  value={values.advices}
                  name="advices"
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
    </div>
  );
};

export default AddAdvice;
