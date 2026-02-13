import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">
          ProFuel Nutrition 💪
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-red-500 cursor-pointer transition">Home</li>
          <li className="hover:text-red-500 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-red-500 cursor-pointer transition">
            Programs
          </li>
          <li className="hover:text-red-500 cursor-pointer transition">
            Pricing
          </li>
          <li className="hover:text-red-500 cursor-pointer transition">
            Contact
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="space-y-4">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">Programs</li>
            <li className="hover:text-red-500 cursor-pointer">Pricing</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
