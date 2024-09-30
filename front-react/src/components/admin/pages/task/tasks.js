import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 
import axios from "axios";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import Swal from 'sweetalert2';
import {log10} from "chart.js/helpers";

function Tasks() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/tasks/');
                setData(res.data.tasks);
            } catch (error) {
                setError('Failed to fetch tasks. Please try again later.');
                console.error(error);
            } finally {
                setLoading(false); // Set loading to false after the API call
            }
        };

        fetchTasks();
    }, []);

    function handleDelete(id) {
        Swal.fire({
            title: "Are you sure you want to delete this Task?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/delete`)
                    .then(() => {
                        setData(prevData => prevData.filter(task => task.id !== id)); 
                        Swal.fire('Deleted!', 'The task has been deleted.', 'success');
                    })
                    .catch(() => {
                        Swal.fire('Error!', 'Failed to delete the task. Please try again.', 'error');
                    });
            }
        });
    }

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (error) {
        return <div>{error}</div>; // Error state
    }
    console.log(data)
    return (
        <div>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">Tasks</h3>
                                <nav aria-label="breadcrumb">
                                    <Link to="/create-task" className='btn btn-gradient-success btn-rounded btn-fw'>Add Task</Link>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Tasks Table</h4>
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Image</th>
                                                        <th>Deadline</th>
                                                        <th>Description</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map(task => (
                                                            <tr key={task.id}>
                                                                <td>{task.title}</td>
                                                                <td>
                                                                    {task.san7a ? (
                                                                        <img src={`http://127.0.0.1:8000/${task.san7a}`} alt={`${task.title} image`}  />
                                                                    ) : (
                                                                        <p>No Image</p>
                                                                    )}
                                                                </td>
                                                                <td>{task.deadline}</td>
                                                                <td>{task.description}</td>
                                                                <td>
                                                                    <Link to={`/task-edit/${task.id}`}>
                                                                        <MdEdit style={{ width: 25, height: 25 }} />
                                                                    </Link>
                                                                    <MdDeleteForever style={{ width: 25, height: 25 }} onClick={() => handleDelete(task.id)} />
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

export default Tasks;
