import React from 'react'



import Navbar from "../../components/admin/Navbar"; 
import Sidebar from "../../components/admin/Sidebar"; 
import Home from "../../components/admin/home"; 
import Footer from "../../components/admin/Footer"; 

// import "../../assets/vendors/css/vendor.bundle.base.css";
// import "../../assets/vendors/mdi/css/materialdesignicons.min.css";
// import "../../assets/css/style.css";

export default function admin() {
  return (
    <div>

<div className="container-scroller">
      <Navbar /> 
      <div className="container-fluid page-body-wrapper">
        <Sidebar /> 
        <div className="main-panel">
            <Home/>
          <Footer /> 
        </div>
      </div>
    </div>

    </div>
  )
}
