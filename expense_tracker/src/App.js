import "./App.css";
import SideBar from "./Sidebar";
import Body from "./Body";
import { useState } from "react";
function App() {
  const [active, setActive] = useState(0);
  console.log(active);
  const activeHandler = (arg) => {
    setActive(arg);
  };
  return (
    <div className="flexbox">
      <SideBar active={active} activeHandler={activeHandler}></SideBar>
      <Body active={active}></Body>
    </div>
  );
}

export default App;
