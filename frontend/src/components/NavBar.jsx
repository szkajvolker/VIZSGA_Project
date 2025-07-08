import React from "react";
import { Link, useNavigate } from "react-router-dom"; // jól sejtetted hogy ezt Link-el kellett volna megoldani de sajnos nem használtad fel.

const NavBar = () => {
  const navigate = useNavigate();

  const handleGoToCreatePage = () => {
    // Elfogadom de ilyen egyszerű logikát nem kell kiszervezni, Link-el kevesebb kód.
    navigate("/create");
  };

  const handleGoToHomePage = () => {
    navigate("/home");
  };
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-200 shadow-md">
      <div className="flex justify-center items-center space-x-4 p-4">
        <button
          className="cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={handleGoToCreatePage}
        >
          Go to create
        </button>

        <button
          className="cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={handleGoToHomePage}
        >
          Go to Home
        </button>
        {/*  <Link
          to={"/create"}
        >
          Create Page
        </Link> */}
        {/*  <Link
          to={"/"}
        >
          Home
        </Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
