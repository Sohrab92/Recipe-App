import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("red");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <p>Counter</p>
      <Counter initialCount={0} />
      <p>Counter Hooks</p>
      <CounterHooks initialCount={0} />
      <br />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
