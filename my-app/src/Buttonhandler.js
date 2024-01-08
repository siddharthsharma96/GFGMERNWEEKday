const ButtonHandler = (props) => {
  const handleDecremnt = () => {
    // setValue(value - 1);
    props.updater(props.value - 1);
    console.log("decrement button");
  };
  const HandleIncrement = () => {
    // setValue(value + 1);
    props.updater(props.value + 1);
    console.log("increment button");
  };
  let functionss;
  if (props.FunctionName === "handleDecremnt") {
    functionss = handleDecremnt;
  } else {
    functionss = HandleIncrement;
  }
  return <button onClick={functionss}>{props.text}</button>;
};
export default ButtonHandler;
