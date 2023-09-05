import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  return (
    <div>
      <input
        value={toDo}
        onChange={onChange}
        type="text"
        placeholder="Write your to do..."
      />
    </div>
  );
}

export default App;
