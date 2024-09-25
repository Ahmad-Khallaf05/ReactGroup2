import React from 'react';
import { Link } from 'react-router-dom';

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
            <span className="menu-title">Users</span>
            <i className="mdi mdi-home menu-icon"></i>
          </a>
        </li>
       
      </ul>
    </nav>
  );
};

export default Sidebar;
