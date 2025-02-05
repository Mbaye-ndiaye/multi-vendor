import { Routes, Route } from "react-router-dom";
import Inscriptions from "./pages/Inscriptions";
import DashbordLink from "./pages/DashbordLink";
import Login from "./pages/Login";


function App() {
  return (
    <div>
          <Routes>
          <Route path="/" element={<Inscriptions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<DashbordLink />} />
          </Routes>
        </div>
  );
}

export default App;
