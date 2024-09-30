import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { LuView } from "react-icons/lu";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { MdVisibility } from "react-icons/md";
export default function Admins() {
  const MySwal = withReactContent(Swal)
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/admins");
      // console.log(result)
      // console.log(result.data)
      // console.log(result.data.result)
      setAdminData(result.data.result);
    } catch (error) {
      console.log("Somthing went wrong");
    }};
  const handleDelete = async (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure you want to delete this Admin?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then( async (result) => {
      if (result.isConfirmed) {
        try {
              const response = await axios.delete(`http://127.0.0.1:8000/api/admin_delete/${id}`);
              if (response.status === 200) {
                // Filter out the admin from the adminData state if soft delete was successful
                const newAdminData = adminData.filter((item) => item.id !== id);
                setAdminData(newAdminData);
                Swal.fire("Admin has been deleted successfully!", "", "success");
                // alert("Admin has been deleted successfully.");
              }
            } 
            catch (error) {
              console.error("Something went wrong", error);
              Swal.fire("Failed to delete the admin. Please try again.");
            }
          // axios.delete(`http://127.0.0.1:8000/api/user/${id}/delete`).then(res=>{
          //     // alert('The User Has Been Delete');
          //     setLoading(true);
          // })
      }
    });
  }
    // if (window.confirm("Are you sure you want to delete this admin? This action cannot be undone.")) {
    //   try {
    //     const response = await axios.delete(`http://127.0.0.1:8000/api/admin_delete/${id}`);
    //     if (response.status === 200) {
    //       // Filter out the admin from the adminData state if soft delete was successful
    //       const newAdminData = adminData.filter((item) => item.id !== id);
    //       setAdminData(newAdminData);
    //       alert("Admin has been deleted successfully.");
    //     }
    //   } catch (error) {
    //     console.error("Something went wrong", error);
    //     alert("Failed to delete the admin. Please try again.");
    //   }
    // }
  

  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="container">
              <div className="page-header">
                <h3 className="page-title">Admins Information</h3>
                <nav aria-label="breadcrumb">
                  <a
                    href="/add_admin"
                    className="btn btn-gradient-success btn-rounded btn-fw"
                  >
                    Add Admin
                  </a>
                </nav>
              </div>
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-header text-center">
                      <h4>Admins Table</h4>
                    </div>
                    <div className="card-body">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>S No.</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {adminData.map((admin, i) => {
                            return (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.role}</td>
                                <td>
                                  <NavLink
                                    to={`/view_admin/${admin.id}`}
                                    type="button"
                                    className="btn btn-inverse-info"
                                  >
                                    <MdVisibility
                                      style={{ width: 25, height: 25, cursor: 'pointer' }}
                                    />
                                  </NavLink>
                                  <NavLink
                                    to={`/edit_admin/${admin.id}`}
                                    className="btn btn-inverse-warning"
                                  >
                                    {/* <FaUserEdit /> */}
                                    <MdEdit style={{width: 35 , height:35}}/>
                                  </NavLink>
                                  <button
                                    className="btn btn-inverse-danger"
                                    onClick={() => handleDelete(admin.id)}
                                  >
                                    {/* <TiUserDelete /> */}
                                    <MdDeleteForever style={{width: 35 , height:35}}/>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
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
