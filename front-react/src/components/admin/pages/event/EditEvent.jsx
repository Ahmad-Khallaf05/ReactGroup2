import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 

const EditEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        title: '',
        description: '',
        san7a: '',
        date: '',
        category: '',
    });

    useEffect(() => {
        fetchEvent();
    }, [id]);

    const fetchEvent = () => {
        axios.get(`http://127.0.0.1:8000/api/event/${id}`)
            .then(response => {
                setEvent(response.data.event);
            })
            .catch(error => {
                console.error('Error fetching event:', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/event/${id}`, event)
            .then(() => {
                navigate('/event');
            })
            .catch(error => {
                console.error('Error updating event:', error);
            });
    };

    const handleCancel = () => {
        navigate('/event'); 
    };

    return (
        <div>
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <h3>Edit Event</h3>
                        <form onSubmit={handleSubmit} className="p-4">
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={event.title || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    value={event.description || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>San7a</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="san7a"
                                    value={event.san7a || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    value={event.date || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="category"
                                    value={event.category || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Update Event</button>
                            <button type="button" className="btn btn-secondary ml-2" onClick={handleCancel}>Cancel</button>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default EditEvent;
