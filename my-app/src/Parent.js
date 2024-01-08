import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  let coursweName = "mern Stack";
  let b = 23;
  let c = 6789;
  b = 34;
  const [bank, setBank] = useState(234567);
  //   console.log(bank);

  return (
    <>
      <h1>Parent Element</h1>
      <p>.</p>
      <Child1 a={coursweName} b={b} c={c}></Child1>
      <Child2
        coursweName={coursweName}
        age={b}
        mob={c}
        bank={bank}
        setBank={setBank}
      ></Child2>
    </>
  );
};
export default Parent;
