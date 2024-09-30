import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate,NavLink } from "react-router-dom";

export default function ViewAdmin() {
  const [adminData, setAdminData] = useState([]);
  const navigate = useNavigate()

  const {id} = useParams()
  useEffect(()=> {
      fetchAdmin()
  },[id])

  const fetchAdmin = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/admin/"+id);
      // console.log(result)
      // console.log(result.data)
      // console.log(result.data.result)
      setAdminData(result.data.admins);
    } catch (error) {
      console.log("Somthing went wrong");
    }
  };

  const backHandler = ()=>{
    navigate('/Admins')
}


function Image (image){
    if(image){
        return (
            <>
                < img src={`http://127.0.0.1:8000/${image}`} alt="student"  />
            </>
        )
    }
    else
    {
        return (
            <>
                < img src="https://afn.ca/wp-content/uploads/2022/12/unknown_staff-500x500.webp" alt="student"  />
            </>
        )
    }

}

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
                  {/* <a
                    href="/add_admin"
                    className="btn btn-gradient-success btn-rounded btn-fw"
                  >
                    Add Admin
                  </a> */}
                </nav>
              </div>
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Contacts Table</h4>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>ID No.</th>
                            <th>Image</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Date of Join</th>
                          </tr>
                        </thead>
                        <tbody>
                              <tr>
                                <td>{adminData.id}</td>
                                <td>{Image(adminData.san7a)}</td>
                                <td>{adminData.name}</td>
                                <td>{adminData.email}</td>
                                <td>{adminData.role}</td>
                                <td>{adminData.created_at}</td>
                              </tr>
                        </tbody>
                      </table>
                      <div>
                      <NavLink to={`/edit_admin/${adminData.id}`} type="button" className="btn btn-inverse-info" > Edit </NavLink>
                                    <button className="btn btn-inverse-warning" onClick={backHandler}>Back</button>
                                  {/* <NavLink to={`/Admins`} className="btn btn-inverse-warning"> Back </NavLink> */}
                                  {/* <button className="btn btn-inverse-danger" onClick={()=>handleDelete(admin.id)}>Delete</button> */}
                      </div>
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
