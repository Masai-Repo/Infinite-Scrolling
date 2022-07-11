import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Scroll } from "./Components/Scroll";
import { Scrolltwo } from "./Components/Scrolltwo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Scroll /> */}
      <Scrolltwo />
    </div>
  );
}

export default App;
