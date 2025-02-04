import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
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

      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Mon Profile</span>
        <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;

