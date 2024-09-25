import React from 'react'
import '../css/style.css';
import '../css/bootstrap.min.css';


export default function hero() {
  return (
    <div>


        
  {/* Hero Start */}
  <div
    className="container-fluid py-5 hero-header wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7 col-md-12">
          <h1 className="mb-3 text-primary">We Care Your Baby</h1>
          <h1 className="mb-5 display-1 text-white">
            The Best Play Area For Your Kids
          </h1>
          <a
            href=""
            className="btn btn-primary px-4 py-3 px-md-5  me-4 btn-border-radius"
          >
            Get Started
          </a>
          <a
            href=""
            className="btn btn-primary px-4 py-3 px-md-5 btn-border-radius"
          >
            Learn More
          </a>
          
        </div>
      </div>
    </div>

  </div>
  {/* Hero End */}
    </div>
  )
}
