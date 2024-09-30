import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const EditClassroom = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        level: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        level: "",
    });

    const validate = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.level) {
            errors.level = "Level is required";
        }
        return errors;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/classrooms/${id}`, formData);
            console.log("Response:", response.data);
            navigate('/classrooms');
        } catch (error) {
            console.error('Error updating classroom:', error);
            alert("An error occurred: " + (error.response?.data?.message || error.message));
        }
    };

    const fetchClassroom = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/classrooms/${id}/edit`);
            console.log("Classroom ID:", id);
            setFormData({
                name: response.data.classroom.name,
                level: response.data.classroom.level,
            });
        } catch (error) {
            console.error('Error fetching classroom:', error);
            setError("Failed to fetch classroom details.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClassroom();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">Edit Classroom</h3>
                            <nav aria-label="breadcrumb">
                                <Link to="/classrooms" className='btn btn-danger float-end'>Back</Link>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Edit A Classroom</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={onSubmit} autoComplete="off">
                                            <div className="form-group mb-3">
                                                <label htmlFor='name'>Name</label>
                                                <input
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    id="name"
                                                    type="text"
                                                    placeholder="Enter classroom name"
                                                    className={formErrors.name ? "input-error form-control" : "form-control"}
                                                />
                                                {formErrors.name && <p className="error">{formErrors.name}</p>}
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor='level'>Level</label>
                                                <input
                                                    value={formData.level}
                                                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                                    id="level"
                                                    type="text"
                                                    placeholder="Enter classroom level"
                                                    className={formErrors.level ? "input-error form-control" : "form-control"}
                                                />
                                                {formErrors.level && <p className="error">{formErrors.level}</p>}
                                            </div>
                                            <div className="form-group mb-3">
                                                <button type='submit' className='btn btn-primary'>
                                                    Update Classroom
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
    );
};

export default EditClassroom;
