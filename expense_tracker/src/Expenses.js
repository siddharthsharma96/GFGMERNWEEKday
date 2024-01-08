import BodyItems from "./BodyItems";
import { values } from "./util";
const Expenses = () => {
  return (
    <div className="layout-container__wrapper">
      <div className="flexbox flexbox-justify-between flexbox-align-baseline">
        <h3>Expenses</h3>
        <span className="pill info">INR 770</span>
      </div>
      <hr />
      <div className="layout-container__expenses">
        <ul>
          {values.map((e) => {
            return <BodyItems values={e}></BodyItems>;
          })}
          {/* <BodyItems values={values[0]}></BodyItems>
          <BodyItems values={values[1]}></BodyItems>
          <BodyItems values={values[2]}></BodyItems>
          <BodyItems values={values[3]}></BodyItems> */}
        </ul>
      </div>
    </div>
  );
};
export default Expenses;
