import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");

    // setToDos(function (currentArray) {
    //   return;
    // }); //아래와 같은 내용이다

    setToDos((currentArray) => [toDo, ...toDos]);
    console.log(toDos);

    // setToDos((currentArray) => {
    //   const newArray = [toDo, ...currentArray];
    //   console.log(newArray);
    //   return newArray;
    // });   //return처리를 해주면 입력한 값이 바로 배열에 추가되서 출력된다
  };

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
