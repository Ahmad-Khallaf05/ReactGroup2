import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Subject() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/subjects/')
            .then(res => setData(res.data.subjects)) // Assuming the API returns 'subjects'
            .catch(error => console.error(error));
    }, []);

    function handleDelete(id) {
        axios.delete(`http://127.0.0.1:8000/api/subjects/${id}/delete`)
            .then(res => {
                alert('The subject has been deleted');
                setData(data.filter(subject => subject.id !== id)); // Update the state after deletion
            })
            .catch(error => console.error('Error deleting subject:', error));
    }

    return (
        <div>
            <div className="container-scroller">
                <Navbar /> 
                <div className="container-fluid page-body-wrapper">
                    <Sidebar /> 
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">Subjects</h3>
                                <nav aria-label="breadcrumb">
                                    <Link to="/create-subject" className='btn btn-gradient-success btn-rounded btn-fw'>
                                        Add Subject
                                    </Link>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Subjects Table</h4>
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>                                       
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map(subject => (
                                                            <tr key={subject.id}>
                                                                <td>{subject.name}</td>
                                                                <td>
                                                                    <Link to={`/subject-edit/${subject.id}`}>
                                                                        <MdEdit style={{ width: 35, height: 35 }} />
                                                                    </Link>
                                                                    <MdDeleteForever 
                                                                        style={{ width: 35, height: 35 }} 
                                                                        onClick={() => handleDelete(subject.id)} 
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
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
        </div>
    );
}

export default Subject;
