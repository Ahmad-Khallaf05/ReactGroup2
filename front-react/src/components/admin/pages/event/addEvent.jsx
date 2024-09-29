import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const CreateEvent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        san7a: "",
        date: "",
        category: "",
        admin_id: ""  
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/event', formData);
            
            navigate('/event');
        } catch (error) {
            
            console.error('Error submitting form:', error);
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
                                <h3 className="page-title">Add Event</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/events" className='btn btn-danger float-end'>Back</a>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Add An Event</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit} autoComplete="off">
                                                <div className="form-group mb-3">
                                                    <label htmlFor='title'>Title</label>
                                                    <input value={formData.title}
                                                        onChange={handleChange}
                                                        id="title"
                                                        type="text"
                                                        placeholder="Enter event title"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='description'>Description</label>
                                                    <input value={formData.description}
                                                        onChange={handleChange}
                                                        id="description"
                                                        type="text"
                                                        placeholder="Enter event description"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='san7a'>San7a</label>
                                                    <input value={formData.san7a}
                                                        onChange={handleChange}
                                                        id="san7a"
                                                        type="text"
                                                        placeholder="Enter event san7a"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='date'>Date</label>
                                                    <input value={formData.date}
                                                        onChange={handleChange}
                                                        id="date"
                                                        type="date"
                                                        placeholder="Enter event date"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='category'>Category</label>
                                                    <input value={formData.category}
                                                        onChange={handleChange}
                                                        id="category"
                                                        type="text"
                                                        placeholder="Enter event category"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='admin_id'>Admin ID</label>
                                                    <input value={formData.admin_id}
                                                        onChange={handleChange}
                                                        id="admin_id"
                                                        type="number"
                                                        placeholder="Enter admin ID"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <button type='submit' className='btn btn-primary'>Add Event</button>
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
    )
}

export default CreateEvent;
