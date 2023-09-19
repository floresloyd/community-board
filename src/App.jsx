import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <div>
        <img src="src/assets/gov-island-logo-removebg-preview.png" alt="logo" />
        <h1> Community Board </h1>
      </div>
      <Board />
    </div>
  );
}

export default App;
