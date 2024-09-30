import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever } from 'react-icons/md'; 
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 

function Studentclasses() {
    const [studentclasses, setstudentclasses] = useState([]);

    useEffect(() => {
        fetchstudentclasses();
    }, []);

    // Function to fetch classrooms data from the API
    const fetchstudentclasses= () => {
        axios.get('http://127.0.0.1:8000/api/studentclasses')
            .then(response => {
                console.log('API Response:', response.data);
                setstudentclasses(response.data);
                setstudentclasses(response.data.studentclasses); 

            })
            .catch(error => {
                console.error('Error fetching classrooms:', error);
            });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/studentclasses/${id}/delete`);
            fetchstudentclasses(); 
        } catch (error) {
            console.error('Error deleting studentclass:', error);
        }
    };

    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">Classrooms Table</h3>
                            <Link to="/createstudentclass" className="btn btn-primary">
                                Create Student classes
                            </Link>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Student classes Table</h4>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    {/* <th>class name</th> */}
                                                    <th>admin name</th>
                                                    <th>class name</th>
                                                    <th>Date</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
    {studentclasses.length > 0 ? (
        studentclasses.map((studentclass) => (
            <tr key={studentclass.id}>
                {/* <td>{classroom.name}</td> */}
                <td>{studentclass.admin_id}</td>
                <td>{studentclass.classroom_id}</td>
                <td>{studentclass.created_at}</td>
                <td>
                    <Link to={`/edit-classroom/${studentclass.id}`}>
                        <MdEdit style={{ width: 25, height: 25, cursor: 'pointer' }} />
                    </Link>
                </td>
                <td>
                    <MdDeleteForever
                        style={{ width: 35, height: 35, cursor: 'pointer' }}
                        onClick={() => handleDelete(studentclass.id)}
                    />
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="5">No Student classes found</td>
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
}

export default Studentclasses;
