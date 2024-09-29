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
    // password: "",
    role: "",
    // san7a: "",
  });

  useEffect(() => {
    fetchAdmin();
  }, [id]);

  const fetchAdmin = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/admin/" + id);
      // console.log(result.data.users)
      setAdminData(result.data.admins);
    } catch (error) {
      console.log("Somthing wrong");
    }
  };

  const changeAdminData = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
    console.log(adminData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://127.0.0.1:8000/api/admin_update/" + id,
        adminData
      );
      alert("Admin info Updated successfully!");
      navigate("/Admins");
    } catch (error) {
      // console.log('Somthing wrong')
      alert("All Fields are required!!");
    }
  };

  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            {/* <div className="page-header">
              <h3 className="page-title">Update Information</h3>
              <nav aria-label="breadcrumb">
                <a href="/Admins" className="btn btn-info float-end">
                  Back
                </a>
              </nav>
            </div> */}
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header text-center">
                    <h4>Edit Information</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group mb-3">
                        <label htmlFor="title">ID No.</label>
                        <input
                          type="text"
                          className="form-control"
                          name="id"
                          value={id}
                          disabled
                        ></input>
                      </div>
                      {/* <div className="form-group mb-3">
                        <label htmlFor="title">Image</label>
                        <img src="..." className="img-thumbnail" alt="..." />
                      </div> */}
                      <div className="form-group mb-3">
                        <label htmlFor="title">Full Name</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          value={adminData.name}
                          onChange={(e) => changeAdminData(e)}
                          //   placeholder={adminData.name}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="description">Email</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          value={adminData.email}
                          onChange={(e) => changeAdminData(e)}
                        />
                      </div>
                      <div>
                        <label htmlFor="progress">Role</label>
                        <div className="input-group mb-3">
                          <select
                            className="form-select"
                            id="inputGroupSelect02"
                            onChange={(e) => changeAdminData(e)}
                            name="role"
                            value={adminData.role}
                          >
                            <option value="Teacher">Teacher</option>
                            <option value="Supervisor">Supervisor</option>
                          </select>
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupSelect02"
                          >
                            Options
                          </label>
                        </div>
                        <p className="error"></p>
                      </div>

                      <label htmlFor="title">Image</label>
                      <div className="input-group mb-3">
                        {/* <label htmlFor='title'>Image</label> */}
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                          name="admin_img"
                          onChange={(e) => changeAdminData(e)}
                        />
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupFile02"
                        >
                          Upload
                        </label>
                      </div>
                      <div className="container d-flex justify-content-center gap-2">
                        <button
                          type="submit"
                          className="btn btn-success btn-fw"
                          onClick={e=>onSubmit(e)}
                        >
                          Update
                        </button>
                        <button
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
