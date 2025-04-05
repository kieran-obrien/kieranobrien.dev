import { useState } from "react";

function ButtonTest() {
  const [count, setCount] = useState(0);
  const [isJello, setIsJello] = useState(null);

  return (
    <div
      className={`card ${isJello}`}
      onAnimationEnd={() => setIsJello(null)} // Reset animation class after it ends
    >
      <button
        className="count"
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
  );
}

export default ButtonTest;
