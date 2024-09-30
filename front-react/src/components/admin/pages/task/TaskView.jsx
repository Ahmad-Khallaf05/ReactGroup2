import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 
import axios from "axios";

function TaskView() {
    const { id } = useParams(); 
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTask = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`);
            setTask(res.data.task);
        } catch (error) {
            setError('Failed to fetch task. Please try again later.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTask();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>; 
    }

    if (!task) {
        return <div>Task not found.</div>;
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
                                <h3 className="page-title">Task Details</h3>
                                <Link to="/tasks" className='btn btn-gradient-primary btn-rounded btn-fw'>Back to Tasks</Link>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">{task.title}</h4>
                                            <p><strong>Deadline:</strong> {task.deadline}</p>
                                            <p><strong>Description:</strong> {task.description}</p>
                                            <p><strong>Status:</strong> {task.status}</p>
                                            <Link to={`/add-user/${task.id}`} className="btn btn-primary">Add User</Link>
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

export default TaskView;
