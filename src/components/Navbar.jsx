import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkStyle =
    "relative hover:text-blue-500 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <Link to="/" className={linkStyle}>
            Home
          </Link>

          <Link to="/cart" className={`${linkStyle} relative`}>
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* LOGIN BUTTON */}
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          ) : (
            /* PROFILE ICON */
            <div className="relative">

              <FaUserCircle
                className="text-2xl cursor-pointer text-gray-700 hover:text-blue-500"
                onClick={() => setProfileOpen(!profileOpen)}
              />

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-3 flex flex-col gap-2">

                  <p className="text-sm text-gray-600">
                    Hi, {user.username}
                  </p>

                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white text-sm py-1 rounded hover:bg-red-600"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4 flex flex-col gap-3">

          <Link to="/" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Home
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Cart ({totalItems})
          </Link>

          {!user ? (
            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="bg-blue-500 text-white py-1 rounded"
            >
              Login
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-600">
                Hi, {user.username}
              </p>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white py-1 rounded"
              >
                Logout
              </button>
            </div>
          )}

        </div>
      )}
    </nav>
  );
};

export default Navbar;

