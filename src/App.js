import { BrowserRouter as Router } from "react-router-dom"

import './App.css';
import Navbar from "./components/Navbar"
import Navigate from "./components/Navigate"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Navigate/>
      </Router>
    </div>


  );
}

export default App;
