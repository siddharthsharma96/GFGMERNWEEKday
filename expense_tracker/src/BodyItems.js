const BodyItems = ({ values }) => {
  return (
    <li className="flexbox flexbox-justify-between">
      <div className="flexbox">
        <div className="flexbox flexbox-column flexbox-align-center date">
          <div className="month">{values.month}</div>
          <div className="day">{values.date}</div>
        </div>
        <div className="flexbox flexbox-align-center">
          <h3 className="title">{values.title}</h3>
          <span className="type-pill">{values.type}</span>
        </div>
      </div>
      <div className="flexbox flexbox-align-center">
        <div className="pill">{values.cur} INR</div>
        <button className="actions">
          <span className="material-icons edit">edit</span>
        </button>
        <button className="actions">
          <span className="material-icons delete">delete</span>
        </button>
      </div>
    </li>
  );
};
export default BodyItems;
