import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-200 to-cyan-200 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-white font-bold text-xl">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/posting" className="text-white">
            Posting
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
