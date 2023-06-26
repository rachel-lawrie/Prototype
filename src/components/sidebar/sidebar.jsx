import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-sm-2 bg-light d-flex flex-column justify-content-between min-vh-100">
          <div>
            <a className="text-decoration-none ms-4 d-flex align-items-center d-none d-sm-inline">
              <span className="fs-4">Side Menu</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
