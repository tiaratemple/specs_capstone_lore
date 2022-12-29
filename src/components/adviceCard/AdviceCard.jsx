import "./AdviceCard.css";

const AdviceCard = ({ advice }) => {
  console.log("advice", advice);
  const { advices, adviceBy } = advice;

  return (
    <div className="advice-card-wrapper">
      <div className="advice-card-container">
        <p className="advice-detail">{advices}</p>
        <h3 className="advice-by-title">Advice By:</h3>
        <p className="advice-by-detail">{adviceBy}</p>
      </div>
    </div>
  );
};
export default AdviceCard;
