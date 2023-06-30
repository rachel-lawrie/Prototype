import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Sidebar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
      setIsMenuClicked(true);
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      setIsMenuClicked(false);
    }
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div
        className={`${menu_class} bg-light  flex-column align-items-center justify-content-between min-vh-100`}
      >
        <button className="close-btn" onClick={updateMenu}>
          X
        </button>
        <div className="m-5">
          <a className=" text-decoration-none d-flex align-items-center d-none d-sm-inline">
            <span className="fs-4 sidebar-brand">OtherForest</span>
          </a>
          <hr className="d-none d-sm-block"></hr>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item d-flex align-items-center bullet-point">
              <a href="#" className="nav-link" aria-current="page">
                <span style={{ color: "rgb(70, 124, 67)" }}>Dashboard</span>
              </a>
            </li>
            <li className="nav-item bullet-point">
              <a href="#" className="nav-link" aria-current="page">
                <i
                  style={{ color: "rgb(70, 124, 67)" }}
                  className="bi bi-person me-2"
                ></i>
                <span style={{ color: "rgb(70, 124, 67)" }}>Profile</span>
              </a>
            </li>
            <li className="nav-item bullet-point">
              <a href="#" className="nav-link" aria-current="page">
                <i
                  style={{ color: "rgb(70, 124, 67)" }}
                  className="bi bi-question-circle me-2"
                ></i>
                <span style={{ color: "rgb(70, 124, 67)" }}>Help</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
