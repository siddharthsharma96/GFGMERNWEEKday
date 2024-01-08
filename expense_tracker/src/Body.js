import BodyItems from "./BodyItems";
import Expenses from "./Expenses";

const Body = ({ active }) => {
  return (
    <div class="layout-container">
      {active === 0 ? (
        <Expenses></Expenses>
      ) : active === 1 ? (
        <div>Add</div>
      ) : active === 2 ? (
        <div>Analytics</div>
      ) : (
        <p>Page not Found</p>
      )}
    </div>
  );
};
export default Body;
