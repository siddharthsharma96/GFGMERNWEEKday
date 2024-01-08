import { useState } from "react";
import Value from "./Value";
import ButtonHandler from "./Buttonhandler";

const Counter = () => {
  const [value, setValue] = useState(0);
  const updater = (arg) => {
    console.log(arg);
    setValue(arg);
  };

  return (
    <div className="a">
      <Value value={value}></Value>
      {value >= 0 ? null : <p>Negative Value</p>}
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
