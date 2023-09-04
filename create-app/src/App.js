import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log("all", keyword);

  useEffect(() => {
    console.log("once");
  }, []);

  useEffect(() => {
    // if (keyword !== "" && keyword.length >= 5) {
    //   console.log("search", keyword);
    // }
    console.log("keyword change");
  }, [keyword]);

  useEffect(() => {
    console.log("counter change");
  }, [counter]);

  useEffect(() => {
    console.log("keyword, counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={keyword}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>button</button>
    </div>
  );
}

export default App;
