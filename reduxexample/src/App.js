import './App.css';
import { Welcome } from "./screens/welcome"
import { actions } from "./store/actions";
import { useDispatch, useSelector } from "react-redux"

function App() {

  let dispatch = useDispatch();
  let state = useSelector(state=>state.reducer)

  console.log("state",state)

  const addDataHandler = () =>{
    dispatch(actions.add("test"))
    // add("test")
  }

  const addDataHandler2 = () =>{
    dispatch(actions.subtract("test"))
    // add("test")
  }

  // add("data")
  return (
    <div className="App">
    <Welcome />
    <button onClick={addDataHandler} >+</button>
    <button onClick={addDataHandler2}>-</button>
    <br/>
  {state}
    </div>
  );
}

export default App;
