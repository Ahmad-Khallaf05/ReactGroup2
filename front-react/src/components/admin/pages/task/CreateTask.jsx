import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import Swal from 'sweetalert2';

const CreateTask = () => {
    const navigate = useNavigate();
    
   
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        deadline: "",
        san7a: null
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            san7a: e.target.files[0] 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('deadline', formData.deadline); 
            if (formData.san7a) {
                data.append('san7a', formData.san7a);  
            }

            const response = await axios.post('http://127.0.0.1:8000/api/tasks', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire({
                title: 'Success!',
                text: 'Task Created Successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate('/tasks');
        } catch (error) {
            console.error("Error submitting form:", error.response ? error.response.data : error.message);
            Swal.fire({
                title: 'Error!',
                text: 'There was an error creating the task.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">Add Tasks</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/tasks" className='btn btn-danger float-end'>Back</a>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Add A Task</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit} autoComplete="off">
                                                <div className="form-group mb-3">
                                                    <label htmlFor='title'>Title</label>
                                                    <input
                                                        value={formData.title}
                                                        onChange={handleChange}
                                                        id="title"
                                                        name="title"
                                                        type="text"
                                                        placeholder="Enter Task title"
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='description'>Description</label>
                                                    <input
                                                        value={formData.description}
                                                        onChange={handleChange}
                                                        id="description"
                                                        name="description"
                                                        type="text"
                                                        placeholder="Enter Task description"
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='deadline'>Deadline</label>
                                                    <input
                                                        value={formData.deadline}
                                                        onChange={handleChange}
                                                        id="deadline"
                                                        name="deadline"
                                                        type="date"
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='san7a'>San7a (Image)</label>
                                                    <input
                                                        id="san7a"
                                                        name="san7a"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleFileChange}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <button type='submit' disabled={loading} className='btn btn-primary'>
                                                        {loading ? 'Submitting...' : 'Add Task'}
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
        </>
    );
};

export default CreateTask;
