import React from 'react'

export default function event() {
  return (
    <div>



  {/* Events Start */}
  <div className="container-fluid events py-5 bg-light">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: 700 }}
      >
        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
          Our Events
        </h4>
        <h1 className="mb-5 display-3">Our Upcoming Events</h1>
      </div>
      <div className="row g-5 justify-content-center">
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="events-item bg-primary rounded">
            <div className="events-inner position-relative">
              <div className="events-img overflow-hidden rounded-circle position-relative">
              <img
                  src="https://edsource.org/wp-content/uploads/2021/12/Oak_Tech_137-1024x683.jpg"
                  className="img-fluid w-100 rounded-circle"
                  alt="Image"
                />
                {/* <div className="event-overlay">
                  <a href="img/event-1.jpg" data-lightbox="event-1">
                    <i className="fas fa-search-plus text-white fa-2x" />
                  </a>
                </div> */}
              </div>
              {/* <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                29 Nov
              </div> */}
              <div className="d-flex justify-content-between px-4 py-2">
                <small className="text-white">
                  <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                  12:00pm
                </small>
                <small className="text-white">
                  <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                  York
                </small>
              </div>
            </div>
            <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
              <a href="#" className="h4">
                Music &amp; drawing workshop
              </a>
              <p className="mb-0 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur,
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
          data-wow-delay="0.3s"
        >
          <div className="events-item bg-primary rounded">
            <div className="events-inner position-relative">
              <div className="events-img overflow-hidden rounded-circle position-relative">
              <img
                  src="https://edsource.org/wp-content/uploads/2021/12/Oak_Tech_137-1024x683.jpg"
                  className="img-fluid w-100 rounded-circle"
                  alt="Image"
                />
                {/* <div className="event-overlay">
                  <a href="img/event-3.jpg" data-lightbox="event-1">
                    <i className="fas fa-search-plus text-white fa-2x" />
                  </a>
                </div> */}
              </div>
              {/* <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                29 Nov
              </div> */}
              <div className="d-flex justify-content-between px-4 py-2 ">
                <small className="text-white">
                  <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                  12:00pm
                </small>
                <small className="text-white">
                  <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                  York
                </small>
              </div>
            </div>
            <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
              <a href="#" className="h4">
                Why need study
              </a>
              <p className="mb-0 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur,
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="events-item bg-primary rounded">
            <div className="events-inner position-relative">
              <div className="overflow-hidden rounded-circle position-relative">
                <img
                  src="https://edsource.org/wp-content/uploads/2021/12/Oak_Tech_137-1024x683.jpg"
                  className="img-fluid w-100 rounded-circle"
                  alt="Image"
                />
                {/* <div className="event-overlay">
                  <a href="img/event-3.jpg" data-lightbox="event-1">
                    <i className="fas fa-search-plus text-white fa-2x" />
                  </a>
                </div> */}
              </div>
              {/* <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                29 Nov
              </div> */}
              <div className="d-flex justify-content-between px-4 py-2 ">
                <small className="text-white">
                  <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                  12:00pm
                </small>
                <small className="text-white">
                  <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                  York
                </small>
              </div>
            </div>
            <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
              <a href="#" className="h4">
                Child health consciousness
              </a>
              <p className="mb-0 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Events End*/}



    </div>
  )
}
