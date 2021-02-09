import { useState, useRef, useEffect, createContext } from "react";
import "./App.css";
import { CompA as Abc } from "./conponents/compA"

export let context = createContext();

function App() {
  let [todos, setTodos] = useState([]);
  let [isEdit, setEdit] = useState(false);

  let textInput = useRef(null);

  let addTodoHandler = () => {
    let text = textInput.current.value;

    setTodos([...todos, text]);
    textInput.current.value = "";
  };

  let editTodoHandler = (index) => {
    textInput.current.value = todos[index];
    setEdit(index + 1);
  };

  let updatehandler = () => {
    let text = textInput.current.value;
    todos[isEdit - 1] = text;
    setTodos([...todos]);
    setEdit(false);
    textInput.current.value = "";
  };

  let deleteTodoHandler = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  // return () => {
  //   // run at the time of un mount
  // }

  },[])

  // If we put empty array as a dependency of useEffect then it will runs only on time.

  // context api to send props to nested childs

  let name = "props"

  console.log("render");
  return (
    <div className="App">
      <header className="App-header">
        <context.Provider value={{name, data:["0","1"]}}>

        <Abc name={name}/>
        </context.Provider>
        <span>
          <input id="inp" ref={textInput} placeholder="Enter task" />
          {isEdit ? (
            <button onClick={updatehandler}>Update</button>
          ) : (
            <button onClick={addTodoHandler}>Add</button>
          )}
        </span>
        {todos.map((val, key) => {
          return (
            <div key={key}>
              <span>{val}</span>
              <button onClick={() => editTodoHandler(key)}>Edit</button>
              <button onClick={()=>deleteTodoHandler(key)}>Delete</button>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
