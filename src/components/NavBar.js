import logo from "../images/smile-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GoToTop from "../helpers/ScrollToTop";

function PageLinks() {
  return (
    <>
      <GoToTop />
      <Link className="navBar" to="/menu">
        Menu
      </Link>
      <Link className="navBar" to="/about">
        About Us
      </Link>
      <Link className="navBar" to="/latest_news">
        Latest News
      </Link>
      <Link className="navBar" to="/customer_feedback">
        Feedback
      </Link>
    </>
  );
}

function NavBar() {
  const [Menu, setMenu] = useState(false);
  const [Home, setHome] = useState(false);
  const location = useLocation();
  const navClass = location.pathname === "/" ? "homeNav" : "";
  useEffect(() => {
    location.pathname !== "/" ? setHome(true) : setHome(false);
  }, [location.pathname]);

  return (
    <nav className={navClass}>
      {Home && (
        <Link className="navBarLogo" to="/">
          <img
            src={logo}
            className="logo"
            alt="logo"
            onClick={() => setMenu(false)}
          ></img>
        </Link>
      )}
      {!Menu ? (
        <AiOutlineMenu
          color="white"
          size="50px"
          onClick={() => setMenu(!Menu)}
        />
      ) : (
        <AiOutlineClose
          color="white"
          size="50px"
          onClick={() => setMenu(!Menu)}
        />
      )}
      {Menu && (
        <div className="navBarDown" onClick={() => setMenu(false)}>
          <PageLinks />
        </div>
      )}
      <div className="fullList">
        <PageLinks />
      </div>
    </nav>
  );
}

export default NavBar;
