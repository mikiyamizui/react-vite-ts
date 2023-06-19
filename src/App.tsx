import React, { useState } from "react";
import { button, container } from "./App.css";

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={container}>
      <button
        type="button"
        onClick={() => setCounter((n) => n + 1)}
        className={button}
      >
        {counter}
      </button>
    </div>
  );
}
