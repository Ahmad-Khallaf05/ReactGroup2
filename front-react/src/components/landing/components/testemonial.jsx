import React from 'react';


export default function Testimonial() {
  return (
    <div>
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: 700 }}
          >
            <h4 className="text-primary mb-4 border-bottom border-2 d-inline-block p-2 title-border-radius">
              Our Testimonials
            </h4>
            <h1 className="mb-5 display-3">Parents Say About Us</h1>
          </div>
          <div className="row g-4">
            {/* Testimonial Item 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item img-border-radius bg-light border p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Item 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item img-border-radius bg-light border p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Item 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item img-border-radius bg-light border p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}
