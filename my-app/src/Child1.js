import Child2 from "./Child2";
import Parent1 from "./Parent1";

const Child1 = ({ a, b, c }) => {
  return (
    <>
      <p>
        Child element {a} {b} {c}
      </p>
      <br></br>
      <p>conditional rendering</p>
      <br></br>
      {b > 24 ? <Parent1 a={a} b={b} c={c}></Parent1> : <Child2></Child2>}
      <br></br>
      <p>conditional rendering</p>
    </>
  );
};
export default Child1;
