const BodyItems = ({ values }) => {
  return (
    <li class="flexbox flexbox-justify-between">
      <div class="flexbox">
        <div class="flexbox flexbox-column flexbox-align-center date">
          <div class="month">{values.month}</div>
          <div class="day">{values.date}</div>
        </div>
        <div class="flexbox flexbox-align-center">
          <h3 class="title">{values.title}</h3>
          <span class="type-pill">{values.type}</span>
        </div>
      </div>
      <div class="flexbox flexbox-align-center">
        <div class="pill">{values.cur} INR</div>
        <button class="actions">
          <span class="material-icons edit">edit</span>
        </button>
        <button class="actions">
          <span class="material-icons delete">delete</span>
        </button>
      </div>
    </li>
  );
};
export default BodyItems;
