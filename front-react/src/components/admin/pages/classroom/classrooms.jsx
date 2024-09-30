import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever } from 'react-icons/md'; 
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 
import { useContext } from 'react';
import { AuthContext } from '../../../landing/components/context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function Classrooms() {
    const [classrooms, setClassrooms] = useState([]);
    const { auth } = useContext(AuthContext);
    console.log(auth.user);
    const navigate = useNavigate();
    useEffect(() => {
        if(!auth.user) {
            Swal.fire("Unauthorized","","error");
            navigate("/login");
          }
          else{
              fetchClassrooms();
          }
    }, []);
  // console.log(auth); 
    // Function to fetch classrooms data from the API
    const fetchClassrooms = () => {
        axios.get('http://127.0.0.1:8000/api/classrooms')
            .then(response => {
                console.log('API Response:', response.data);
                setClassrooms(response.data.classrooms); // تأكد من استجابة البيانات الصحيحة
            })
            .catch(error => {
                console.error('Error fetching classrooms:', error);
            });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this classroom?")) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/classrooms/${id}`);
                fetchClassrooms(); 
            } catch (error) {
                console.error('Error deleting classroom:', error);
            }
        }
    };
    if(auth.user.role)
    {
    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">Classrooms Table</h3>
                            <Link to="/create-classroom" className="btn btn-primary">
                                Create Classroom
                            </Link>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Classrooms Table</h4>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Admin</th>
                                                    <th>Level</th>
                                                    <th>Date</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {classrooms.length > 0 ? (
                                                    classrooms.map((classroom) => (
                                                        <tr key={classroom.id}>
                                                            <td>{classroom.name}</td>
                                                            <td>{classroom.admin_id}</td>
                                                            <td>{classroom.level}</td>
                                                            <td>{new Date(classroom.created_at).toLocaleString()}</td>

                                                            <td>
                                                                <Link to={`/edit-classroom/${classroom.id}`}>
                                                                    <MdEdit style={{ width: 25, height: 25, cursor: 'pointer' }} />
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <MdDeleteForever
                                                                    style={{ width: 35, height: 35, cursor: 'pointer' }}
                                                                    onClick={() => handleDelete(classroom.id)}
                                                                />
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="6">No classrooms found</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
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
} else {
    return <>idk</>
}
}

export default Classrooms;
