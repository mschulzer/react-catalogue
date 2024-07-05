import logo from "./logo.svg";
import "./App.css";
import { div } from "@tensorflow/tfjs";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      This is the starting code for "Your first component" ungraded lab
      <Header title="Hello, Morten" />
    </div>
  );
}

export default App;
