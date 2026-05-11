import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Smooth scroll for home sections
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // ✅ Active style
  const activeClass = "text-cyan-300 border-b border-cyan-300";

  return (
    <header className="sticky top-0 z-50 bg-[#0b1020]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-cyan-400 flex items-center justify-center text-white font-bold">
            G
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">GEETA-X</h1>
            <p className="text-xs text-orange-300 tracking-widest">BUSINESS</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <button
            onClick={() => handleScroll("home")}
            className="text-white/80 hover:text-cyan-300"
          >
            Home
          </button>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClass : "text-white/80 hover:text-cyan-300"
            }
          >
            About
          </NavLink>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span className="text-white/80 hover:text-cyan-300 cursor-pointer">
              Business
            </span>

            {dropdown && (
              <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-48">
                <p
                  onClick={() => navigate("/water-bottle")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  💧 Water Bottle
                </p>
                <p
                  onClick={() => navigate("/cleaning-products")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🧴 Cleaning Products
                </p>
                <p
                  onClick={() => navigate("/home-decor")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🏠 Home Decor
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="text-white/80 hover:text-cyan-300"
          >
            Contact
          </button>

          {/* CTA */}
          <button
            onClick={() => handleScroll("contact")}
            className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Quote
          </button>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1020] px-6 pb-4 text-white space-y-4">

          <p onClick={() => handleScroll("home")}>Home</p>
          <p onClick={() => navigate("/about")}>About</p>

          <div>
            <p className="font-semibold">Business</p>
            <div className="ml-4 space-y-2 text-gray-300">
              <p onClick={() => navigate("/water-bottle")}>💧 Water Bottle</p>
              <p onClick={() => navigate("/cleaning-products")}>🧴 Cleaning</p>
              <p onClick={() => navigate("/home-decor")}>🏠 Decor</p>
            </div>
          </div>

          <p onClick={() => handleScroll("contact")}>Contact</p>

          <button
            onClick={() => handleScroll("contact")}
            className="w-full bg-cyan-400 text-black py-2 rounded-lg"
          >
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;