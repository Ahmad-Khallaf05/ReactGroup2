import React from 'react'


export default function nav() {
  return (
    <div>



         {/* Navbar start */}
  <div
    className="container-fluid border-bottom bg-light wow fadeIn"
    data-wow-delay="0.1s"
  >
    {/* <div
      className="container topbar bg-primary d-none d-lg-block py-2"
      style={{ borderRadius: "0 40px" }}
    >
      <div clasasNme="d-flex justify-content-between">
        <div className="top-info ps-2">
          <small className="me-3">
            <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
            <a href="#" className="text-white">
              123 Street, New York
            </a>
          </small>
          <small className="me-3">
            <i className="fas fa-envelope me-2 text-secondary" />
            <a href="#" className="text-white">
              Email@Example.com
            </a>
          </small>
        </div>
        <div className="top-link pe-2">
          <a href="" className="btn btn-light btn-sm-square rounded-circle">
            <i className="fab fa-facebook-f text-secondary" />
          </a>
          <a href="" className="btn btn-light btn-sm-square rounded-circle">
            <i className="fab fa-twitter text-secondary" />
          </a>
          <a href="" className="btn btn-light btn-sm-square rounded-circle">
            <i className="fab fa-instagram text-secondary" />
          </a>
          <a
            href=""
            className="btn btn-light btn-sm-square rounded-circle me-0"
          >
            <i className="fab fa-linkedin-in text-secondary" />
          </a>
        </div>
      </div>
    </div> */}
    <div className="container px-0">
      <nav className="navbar navbar-light navbar-expand-xl py-3">
        <a href="index.html" className="navbar-brand">
          {/* <h1 className="text-primary display-6">
            Baby<span className="text-secondary">Care</span>
          </h1> */}
        </a>
        <button
          className="navbar-toggler py-2 px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars text-primary" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            {/* <a href="service.html" className="nav-item nav-link">
              Event
            </a> */}
            <a href="program.html" className="nav-item nav-link">
              teatcher
            </a>
            <a href="event.html" className="nav-item nav-link">
              Events
            </a>
            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0 bg-secondary rounded-0">
                <a href="blog.html" className="dropdown-item">
                  Our Blog
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div> */}
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <div className="d-flex me-4">
            <div
              id="phone-tada"
              className="d-flex align-items-center justify-content-center"
            >
              <a
                href=""
                className="position-relative wow tada"
                data-wow-delay=".9s"
              >
                <i className="fa fa-phone-alt text-primary fa-2x me-4" />
                <div
                  className="position-absolute"
                  style={{ top: "-7px", left: 20 }}
                >
                  <span>
                    <i className="fa fa-comment-dots text-secondary" />
                  </span>
                </div>
              </a>
            </div>
            {/* <div className="d-flex flex-column pe-3 border-end border-primary">
              <span className="text-primary">Have any questions?</span>
              <a href="#">
                <span className="text-secondary">Free: + 0123 456 7890</span>
              </a>
            </div> */}
          </div>
          <a href="/profile"   >
          <button 
          >
            <i class="fa-solid fa-user"></i>  
<i class="fa-solid fa-user"></i> your profile
          </button>
          </a>
          <a href="/login" >
          <button 
          >
            
<i class="fa-solid fa-user"></i> login
          </button>
          </a>
          <a href="/register" >
          <button 
          >
            
<i class="fa-solid fa-user"></i> register
          </button>
          </a>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Modal Search Start */}
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Search by keyword
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
    </div>
  )
}
