import React from 'react';
import Nav from './nav';
import Footer from './category';
export default function Login() {
  return (
    <div>
      {/* Login Start */}
<Nav />
      <div className="login">
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h1 className="mb-3 text-primary text-center">Login</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <a href='#'><span> Don't have an account? </span></a>
              </form>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
  );
}
