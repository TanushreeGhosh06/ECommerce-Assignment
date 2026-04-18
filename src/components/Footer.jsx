import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 border-t">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-lg font-semibold text-blue-600 mb-2">
            ShopEase
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
            Your one-stop shop for all products. Smooth, simple and fast shopping experience.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-medium mb-3">Quick Links</h3>

          <ul className="text-sm text-gray-600 space-y-2">

            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-blue-500 transition">
                Cart
              </Link>
            </li>

            <li>
              <Link to="/login" className="hover:text-blue-500 transition">
                Login
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
          <h3 className="font-medium">Contact</h3>
          <p className="text-sm text-gray-600">support@shopease.com</p>
          <p className="text-sm text-gray-600">+91 98765 43210</p>
        </div>

        {/* Social Handles */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
          <h3 className="font-medium">Follow Us</h3>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start mt-2">

            <a className="p-2 rounded-full bg-white shadow hover:bg-blue-100 transition">
              <FaFacebookF />
            </a>

            <a className="p-2 rounded-full bg-white shadow hover:bg-pink-100 transition">
              <FaInstagram />
            </a>

            <a className="p-2 rounded-full bg-white shadow hover:bg-blue-100 transition">
              <FaLinkedinIn />
            </a>

            <a className="p-2 rounded-full bg-white shadow hover:bg-gray-200 transition">
              <FaXTwitter />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs sm:text-sm text-gray-500 border-t py-4 px-4">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;