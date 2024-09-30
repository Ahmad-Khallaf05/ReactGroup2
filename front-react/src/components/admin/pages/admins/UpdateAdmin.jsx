import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    san7a: null, // Change this to null initially
  });

  useEffect(() => {
    fetchAdmin();
  }, [id]);

  const fetchAdmin = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/admin/" + id);
      setAdminData(result.data.admins);
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const changeAdminData = (e) => {
    const { name, value, type, files } = e.target;
    setAdminData({
      ...adminData,
      [name]: type === "file" ? files[0] : value, // Handle file input separately
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData object
    const formData = new FormData();
    
    // Append all fields to FormData
    Object.keys(adminData).forEach(key => {
      formData.append(key, adminData[key]);
    });

    try {
      await axios.put(
        "http://127.0.0.1:8000/api/admin_update/" + id,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert("Admin info updated successfully!");
      navigate("/Admins");
    } catch (error) {
      alert("All fields are required!!");
      console.error("Update error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header text-center">
                    <h4>Edit Information</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={onSubmit}>
                      {/* Display current image */}
                      {adminData.san7a && (
                        <img src={`http://127.0.0.1:8000/${adminData.san7a}`} className="img-thumbnail" alt="Current Admin" />
                      )}
                      <div className="form-group mb-3">
                        <label htmlFor="title">ID No.</label>
                        <input
                          type="text"
                          className="form-control"
                          name="id"
                          value={id}
                          disabled
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="title">Full Name</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          value={adminData.name}
                          onChange={changeAdminData}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="description">Email</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          value={adminData.email}
                          onChange={changeAdminData}
                        />
                      </div>
                      <div>
                        <label htmlFor="progress">Role</label>
                        <div className="input-group mb-3">
                          <select
                            className="form-select"
                            id="inputGroupSelect02"
                            onChange={changeAdminData}
                            name="role"
                            value={adminData.role}
                          >
                            <option value="">Choose Admin Role...</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Supervisor">Supervisor</option>
                          </select>
                        </div>
                      </div>

                      {/* File Upload */}
                      <label htmlFor="title">Image</label>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                          name="san7a" // Match with Laravel controller expectation
                          onChange={changeAdminData}
                        />
                      </div>

                      {/* Buttons */}
                      <div className="container d-flex justify-content-center gap-2">
                        <button type="submit" className="btn btn-success btn-fw">
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-fw"
                          onClick={() => navigate("/Admins")}
                        >
                          Back
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
