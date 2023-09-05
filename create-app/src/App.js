import { useState, useEffect } from "react";

function Hello() {
  //type 1
  function effectFn() {
    console.log("created");
    return destroyedFn;
  }
  function destroyedFn() {
    console.log("destroyed");
  }
  useEffect(effectFn, []);

  //type 2
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);

  //type 3
  useEffect(function () {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  }, []);

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
