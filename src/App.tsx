import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>The Summoning</h1>
        <p>Your ghoulish event manager</p>
      </div>
    </>
  );
}

export default App;
