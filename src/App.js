import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rotate from "./components/rotate/Rotate";
import Home from "./components/home/Home";
import Background from "./components/background/Background";

function App() {
  return (
    <BrowserRouter >
      <div className="app">
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/rotate" Component={Rotate}></Route>
          <Route path="/back" Component={Background}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
