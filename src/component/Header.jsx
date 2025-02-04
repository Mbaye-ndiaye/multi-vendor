import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full px-4 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      <div className="relative">
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => setDropdown((prev) => !prev)}
        >
          <span className="text-gray-700 font-medium">Mon Profile</span>
          <FaUserCircle className="text-3xl text-gray-700" />
        </div>
        {dropdown && (
          <div className="absolute right-0 mt-5 bg-white border border-gray-200 rounded-md shadow-lg py-1 w-48">
            <Link
              to="/admin/profil"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <button className="block w-full text-left px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100">
              Déconnexion
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

