import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import AddAdvice from "../../components/addAdvice/AddAdvice";
import AdviceCard from "../../components/adviceCard/AdviceCard";
import "./AdvicePage.css";

const AdvicePage = () => {
  const [advices, setAdvices] = useState([]);
  const [showAddAdviceForm, setShowAddAdviceForm] = useState(false);
  const [newAdviceAdded, setNewAdviceAdded] = useState(false);

  const { userId } = useContext(AuthContext);

  const getUserAdvices = useCallback(() => {
    axios
      .get(`/advices/${userId}`)
      .then((res) => {
        setAdvices(res.data);
        setNewAdviceAdded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    getUserAdvices();
  }, [getUserAdvices, newAdviceAdded]);

  const addNewAdvice = () => {
    setShowAddAdviceForm(true);
  };

  return (
    <>
      <h1>Advice</h1>
      {!advices.length && (
        <div className="advice-p-container">
          <p className="advice-p-text">
            No advice has been added yet. Please add advice below.
          </p>
        </div>
      )}
      <div className="add-advice-btn-container">
        <button className="add-advice-btn" onClick={() => addNewAdvice()}>
          Add new advice
        </button>
      </div>
      {showAddAdviceForm && (
        <AddAdvice
          setShowAddAdviceForm={setShowAddAdviceForm}
          setNewAdviceAdded={setNewAdviceAdded}
        />
      )}
      {advices &&
        advices.map((advice) => {
          return <AdviceCard advice={advice} key={advice.id} />;
        })}
    </>
  );
};

export default AdvicePage;
