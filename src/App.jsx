import Countries from "./Components/Countries";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Filter from "./Components/Filter";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Countries />
    </div>
  );
}

export default App;
