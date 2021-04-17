import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./redux/slices"

function App() {

  let data = useSelector((state)=>state.testReducer);
  let dispatch = useDispatch();

  console.log("data",data)

  let nameChangeHandler = () => {
    dispatch(changeName())
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {data.name} </p>
        <button onClick={nameChangeHandler} >Change Name</button>
      </header>
    </div>
  );
}

export default App;
