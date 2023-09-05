import { useState, useEffect } from "react";

function Hello() {
  function effectFn() {
    console.log("created");
    return destroyedFn;
  }
  function destroyedFn() {
    console.log("destroyed");
  }
  useEffect(effectFn, []);
  return <h1>Hi</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
