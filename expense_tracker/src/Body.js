import BodyItems from "./BodyItems";
import Expenses from "./Expenses";

const Body = ({ active }) => {
  return (
    <div className="layout-container">
      {active === 0 ? (
        <Expenses></Expenses>
      ) : active === 1 ? (
        <div className="layout-container__wrapper">
          <p>Add</p>
        </div>
      ) : active === 2 ? (
        <div className="layout-container__wrapper">
          <p>Analytics</p>
        </div>
      ) : (
        <div className="layout-container__wrapper">
          <p>Page not Found</p>
        </div>
      )}
    </div>
  );
};
export default Body;
