import { createContext, useReducer } from "react";
import "./App.css";
import CompA from "./components/compA";
import CompB from "./components/compB";
import CompC from "./components/compC";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

export let card = "test";
export let dataContext = createContext(null);

let reducer = (state = 0, type) => {
  switch(type){
    case "add":
      return state+1
    default:
      return state
  }
};

function App() {
  let [data, dispatch] = useReducer(reducer, 0);


  console.log("data ==>", data);

  const addHandler = () => {
    dispatch("add");
  };

 
  return (
    <Router>

    <div className="App">
      {/* <header className="App-header">
        {data}
        <dataContext.Provider value={{ schools: "", list: [] }}>
          <CompA />
        </dataContext.Provider>
        <button onClick={addHandler}>Add</button> */}

        <Switch>
          <Route exact path="/compA" component={CompA} />
          <Route exact path="/compB" component={CompB} />
          <Route exact path="/compC/:id" component={CompC} />
        </Switch>


        <Link to="/compA" >CompA</Link>      
        <Link to="/compB" >CompB</Link>   
        <Link to="/compC" >CompC</Link>   
        <button >CompC</button>
        {/* </header> */}
    </div>
    </Router>
  );
}

export default App;
