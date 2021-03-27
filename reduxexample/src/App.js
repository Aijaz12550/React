import './App.css';
import { Welcome } from "./screens/welcome"
import { actions } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./store/configureStore"

function App() {

  let dispatch = useDispatch();

  let state = useSelector(state=>state.reducer)

  console.log("state",state)

  const addDataHandler = () =>{
    // dispatch(actions.add({name:"test"+Math.random()*999}))
    dispatch(actions.fetchData())
    // add("test")
  }

  const addDataHandler2 = () =>{
    // dispatch(actions.subtract("test"))
    store.dispatch(actions.subtract("test"))

    console.log("store",store.getState())
    // add("test")
  }




  // add("data")
  return (
    <div className="App">
    <Welcome />
    <button onClick={addDataHandler} >+</button>
    <button onClick={addDataHandler2}>-</button>
    <br/>
  {state?.map?.((val)=>{
    return(
      <div>
        {val.title}
      </div>
    )
  })
  
  }
    </div>
  );
}

export default App;
