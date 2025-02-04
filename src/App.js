import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Products from "./pages/Products";
import Commande from "./pages/Commande";
import Dashbord from "./pages/Dashbord";
import Inscriptions from "./pages/Inscriptions";


function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-4 bg-gray-100">
          <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route  path="/products" element={<Products />}/>
          <Route path="/commande" element={<Commande />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
