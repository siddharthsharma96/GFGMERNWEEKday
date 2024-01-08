import { useEffect, useState } from "react";
import Value from "./Value";
import ButtonHandler from "./Buttonhandler";

const Counter = () => {
  const [value, setValue] = useState(0);
  const updater = (arg) => {
    setValue(arg);
  };
  useEffect(() => {
    // http calls
    let timer;
    if (value < 0) {
      timer = setTimeout(() => {
        setValue(0);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
    console.log("MERN");
  }, [value]);

  return (
    <div classNameName="a">
      <Value value={value}></Value>
      {/* {value >= 0 ? null : <p>Negative Value</p>} */}
      <div>
        <ButtonHandler
          FunctionName={"HandleIncrement"}
          text={"Incrememnt"}
          value={value}
          updater={updater}
        ></ButtonHandler>
        <ButtonHandler
          FunctionName={"handleDecremnt"}
          text={"Decrememnt"}
          value={value}
          updater={updater}
        ></ButtonHandler>
      </div>
    </div>
  );
};
export default Counter;
