import React from 'react';
import Footer from './category';
import Nav from './nav';

export default function Register() {
  return (
    <div>
      <Nav />

      {/* Register Start */}
      <div className="login">
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h1 className="mb-3 text-primary text-center">Register</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <a href='#'><span> Already have an account? </span></a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Register End */}
    </div>
  );
}
