import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 
import axios from "axios";

function AddUserPage() {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const fetchTask = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`);
            setTask(res.data.task);
        } catch (error) {
            setError('Failed to fetch task. Please try again later.');
            console.error(error);
        } finally {
            setLoading(false);  // Set loading to false here
        }
    };

    const fetchStudents = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/user');
            setStudents(res.data.user);
        } catch (error) {
            setError('Failed to fetch students. Please try again later.');
            console.error(error);
        } finally {
            setLoading(false);  // Set loading to false here as well
        }
    };

    useEffect(() => {
        fetchTask();
        fetchStudents();
    }, [id]);

    const handleAddStudent = async () => {
        if (!selectedStudent) {
            setError('Please select a student.');
            return;
        }
        try {
            await axios.post(`http://127.0.0.1:8000/api/tasks/${id}/students`, { 
                user_id: document.getElementById('studentSelect').value, 
                task_id: id 
            }).then(res => console.log(res)
            );
            setSuccessMessage('Student added to task successfully.');
            setSelectedStudent(''); 
        } catch (error) {
            setError('Failed to add student. Please try again later.');
            console.error(error);
        }
    };

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
                                <h3 className="page-title">Add User to Task: {task.title}</h3>
                                <Link to={`/tasks`} className='btn btn-gradient-primary btn-rounded btn-fw'>Back to Tasks</Link>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <label htmlFor="studentSelect" className="form-label">Select Student</label>
                                                <select 
                                                    id="studentSelect" 
                                                    className="form-select" 
                                                    name='user'
                                                    onChange={(e) => setSelectedStudent(e.target.value)}
                                                >
                                                    <option value="">Choose a student...</option>
                                                    {students.map((student) => (
                                                        <option key={student.id} value={student.id}>
                                                            {student.name} 
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <button 
                                                className="btn btn-primary" 
                                                onClick={handleAddStudent}
                                            >
                                                Add Student
                                            </button>
                                            {successMessage && <div className="alert alert-success mt-2">{successMessage}</div>}
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

export default AddUserPage;
