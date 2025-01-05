import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import PirillaAll from "./Pages/Pirilla/PirillaAll";
import IshilaAll from "./Pages/Ishila/IshilaAll";
import SkameykaAll from "./Pages/Skameyka/SkameykaAll";
import BisetkaAll from "./Pages/Bisetka/BisetkaAll";
import Kravat from "./Pages/Kravat/Kravat";
import Loft from "./Pages/Loft/Loft";
import MiniOffice from "./Pages/MiniOffice/MiniOffice";
import FastFoodKioska from "./Pages/FastFoodKioska/FastFoodKioska";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="pirilla/all" element={<PirillaAll />} />
        <Route path="ishila/all" element={<IshilaAll />} />
        <Route path="bisetka/all" element={<BisetkaAll />} />
        <Route path="skameyka/all" element={<SkameykaAll />} />
        <Route path="kravat/all" element={<Kravat />} />
        <Route path="loft/all" element={<Loft />} />
        <Route path="mini/office/all" element={<MiniOffice />} />
        <Route path="fast/food/kiosk/all" element={<FastFoodKioska />} />
      </Routes>
    </div>
  );
}

export default App;
