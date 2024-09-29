import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever } from 'react-icons/md'; 
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 

function Classrooms() {
    const [classrooms, setClassrooms] = useState([]);

    useEffect(() => {
        fetchClassrooms();
    }, []);

    // Function to fetch classrooms data from the API
    const fetchClassrooms = () => {
        axios.get('http://127.0.0.1:8000/api/classrooms')
            .then(response => {
                console.log('API Response:', response.data);
                setClassrooms(response.data);
                setClassrooms(response.data.classrooms); 

            })
            .catch(error => {
                console.error('Error fetching classrooms:', error);
            });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/classrooms/${id}/delete`);
            fetchClassrooms(); 
        } catch (error) {
            console.error('Error deleting classroom:', error);
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
                                                    <th>admin</th>
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
                <td>{classroom.created_at}</td>
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
            <td colSpan="5">No classrooms found</td>
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

export default Classrooms;
