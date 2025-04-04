import { useState } from "react";
import "./App.css";
import TypewriterHeading from "./TypewriterHeading";

function App() {
  const [count, setCount] = useState(0);
  const [isJello, setIsJello] = useState(null);

  return (
    <>
      <TypewriterHeading />
      <br />
      <hr />
      <div
        className={`card ${isJello}`}
        onAnimationEnd={() => setIsJello(null)} // Reset animation class after it ends
      >
        <button
          onClick={() => {
            if (!isJello) {
              setCount((count) => count + 1);
              setIsJello("jello-horizontal");
            }
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
