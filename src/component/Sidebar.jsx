import { FaTachometerAlt, FaBox, FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-gray-900 text-white h-screen p-5 transition-all ${isOpen ? "w-64" : "w-20"}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white mb-5">
        <FaBars size={24} />
      </button>
      <nav className="space-y-4">
        <Link to="/dashbord" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaTachometerAlt />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link to="/products" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaBox />
          {isOpen && <span>Produits</span>}
        </Link>
        <Link to="/commande" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaShoppingCart />
          {isOpen && <span>Commandes</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
