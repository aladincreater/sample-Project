import "./App.css";
import Home from "./Home";
import { Authentication } from "./authContext";
import Flow from "./components/flow/flow";


function App() {
  return (
    <div className="App">
      <Authentication>
          <Home />
      </Authentication>
      <div className="flow">
     
      <Flow></Flow>
      </div>

    </div>
  );
}

export default App;
