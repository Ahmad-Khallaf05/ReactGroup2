import React, { useEffect, useState } from "react";
import Logout from "../landing/components/logout";
import { AuthContext } from '../landing/components/context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { useEffect } from "react";
const Navbar = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [imaage, setImaage] = useState('');
  console.log(auth);
  useEffect( () => {
    if(auth.user)
    {
      if(auth.user.role == 0) {
        Swal.fire("Unauthorized","","error");
        navigate("/login");
      }
    }else {
      Swal.fire("Unauthorized","","error");
      navigate("/login");
    }
  })
  if(auth.user)
  {if(auth.user.role != 0)
  {

    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="mdi mdi-menu"></span>
        </button>
        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
            </div>
          </form>
        </div>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="nav-profile-img">
                <img src={`http://127.0.0.1:8000/${auth.user.san7a}`} alt="image" />
                <span className="availability-status online"></span>
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black">{auth.user.name}</p>
              </div>
            </a>
            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">

              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="mdi mdi-logout me-2 text-primary"></i>
                <Logout/>
              </a>
            </div>
          </li>




        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};
}
}
export default Navbar;
