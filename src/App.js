import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import PirillaAll from "./Pirilla/PirillaAll";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="pirilla/all" element={<PirillaAll />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
