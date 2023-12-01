import "./App.css";
import Home from "./Home";
import { Authentication, useAuth } from "./authContext";

function App() {
  return (
    <div className="App">
      <Authentication>
          <Home />
      </Authentication>
    </div>
  );
}

export default App;
