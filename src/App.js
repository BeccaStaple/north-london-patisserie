import './App.css';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import HomePic from "./home-pic.png"
import ScrollText from "./components/ScrollText"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <img className="home-img" src={HomePic} alt="tart" />
      <ScrollText />
    </div>
  );
}

export default App;
