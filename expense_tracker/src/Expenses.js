import BodyItems from "./BodyItems";
const Expenses = () => {
  let values = [
    {
      month: "Jan",
      date: 5,
      title: "Rent",
      type: "credit",
      cur: "8000",
    },
    {
      month: "Feb",
      date: 25,
      title: "Travel",
      type: "credit",
      cur: "14000",
    },
    {
      month: "Mar",
      date: 1,
      title: "Salary",
      type: "Debit",
      cur: "80000",
    },
  ];
  return (
    <div class="layout-container__wrapper">
      <div class="flexbox flexbox-justify-between flexbox-align-baseline">
        <h3>Expenses</h3>
        <span class="pill info">INR 770</span>
      </div>
      <hr />
      <div class="layout-container__expenses">
        <ul>
          <BodyItems values={values[0]}></BodyItems>
          <BodyItems values={values[1]}></BodyItems>
          <BodyItems values={values[2]}></BodyItems>
        </ul>
      </div>
    </div>
  );
};
export default Expenses;
