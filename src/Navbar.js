import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div >
          <ul>
            
            <li>
              <Link to={"/mountains"}>Mountains</Link>
            </li>
            <li>
              <Link to={"/beach"}>Beach</Link>
            </li>
            <li>
              <Link to={"/food"}>Food</Link>
            </li>
            <li>
              <Link to={"/birds"}>Birds</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
