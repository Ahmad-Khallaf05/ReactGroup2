import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">
            <span className="menu-title">Home</span>
            <i className="mdi mdi-home menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/users">
            <span className="menu-title">Student</span>
            <i className="mdi mdi-account-tie menu-icon"></i>
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/Tasks">
            <span className="menu-title">Tasks</span>
            <i className="mdi mdi-file-tree menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contacts">
            <span className="menu-title">Contacts</span>
            <i className=" mdi mdi-account-box menu-icon"></i>

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/event">
            <span className="menu-title">Events</span>
            <i className="mdi mdi-calendar menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Admins">
            <span className="menu-title">Admins</span>
            <i className="mdi mdi-account-star menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/classrooms">
            <span className="menu-title">classrooms</span>
            <i className="mdi mdi-school menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/studentclasses">
            <span className="menu-title">studentclasses</span>
            <i className="mdi mdi-home menu-icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
