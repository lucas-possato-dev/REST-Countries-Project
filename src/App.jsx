import Countries from "./Components/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Country from "./Components/Country";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Filter />
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/countries/:name" element={<Country />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
