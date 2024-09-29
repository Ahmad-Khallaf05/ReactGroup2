import React ,{useState,useContext} from 'react';
import { useNavigate} from "react-router-dom";
import { AuthContext } from './context/AuthContext';

import Nav from './nav';
import Footer from './category';
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  // validation
  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {email,password});
        setAuth({
          user: response.data.user,
          token: response.data.token,
        })
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Login failed');
      // }

      navigate('/profile');
    } catch (err) {
      console.error('Error details:', err);
      setErrors({ login: err.message });
    }
  };

  return (
    <div>
      {/* Login Start */}
<Nav />
      <div className="login">
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h1 className="mb-3 text-primary text-center">Login</h1>

              <form onSubmit={submit}>

                <div className="mb-3">
              {errors.login && <p className="error" style={{color: "red"}}>{errors.login}</p>}
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email"
                         onChange={e => setEmail(e.target.value)} />
                </div>
                {errors.email && <p className="error">{errors.email}</p>}


                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password"
                         onChange={e => setPassword(e.target.value)} />
                </div>
                {errors.password && <p className="error">{errors.password}</p>}

                <button type="submit" className="btn btn-primary">Login</button>
                <br/>
                <a href='/register'><span> Don't have an account? </span></a>
              </form>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
  );
}
