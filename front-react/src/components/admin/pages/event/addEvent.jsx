import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const CreateEvent = () => {
    const navigate = useNavigate();

    // State for form fields
    const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        san7a: null, // For file upload
        date: "",
        category: "",
        admin_id: "",
    });

    // State for form errors
    const [formErrors, setFormErrors] = useState({});

    // State for handling form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form value changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormValues({
            ...formValues,
            [name]: files[0] // Handle file selection
        });
    };

    // Handle form validation (basic validation)
    const validate = () => {
        let errors = {};

        if (!formValues.title) errors.title = "Title is required";
        if (!formValues.description) errors.description = "Description is required";
        if (!formValues.date) errors.date = "Date is required";
        if (!formValues.category) errors.category = "Category is required";
        if (!formValues.admin_id) errors.admin_id = "Admin ID is required";

        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);

            const formData = new FormData();
            Object.keys(formValues).forEach(key => {
                formData.append(key, formValues[key]);
            });

            try {
                console.log(formValues);
                await axios.post('http://127.0.0.1:8000/api/event', formValues, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                navigate('/event');
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
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
                            <nav aria-label="breadcrumb">
                                <a href="/events" className='btn btn-danger'>Back</a>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add Event</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit} autoComplete="off" encType={'multipart/form-data'} >
                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='title'>Title</label>
                                                    <input
                                                        name="title"
                                                        value={formValues.title}
                                                        onChange={handleChange}
                                                        id="title"
                                                        type="text"
                                                        placeholder="Enter event title"
                                                        className={formErrors.title ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.title && <p className="error">{formErrors.title}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='description'>Description</label>
                                                    <input
                                                        name="description"
                                                        value={formValues.description}
                                                        onChange={handleChange}
                                                        id="description"
                                                        type="text"
                                                        placeholder="Enter event description"
                                                        className={formErrors.description ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.description && <p className="error">{formErrors.description}</p>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='date'>Date</label>
                                                    <input
                                                        name="date"
                                                        id="date"
                                                        type="date"
                                                        value={formValues.date}
                                                        onChange={handleChange}
                                                        className={formErrors.date ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.date && <p className="error">{formErrors.date}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='category'>Category</label>
                                                    <input
                                                        name="category"
                                                        value={formValues.category}
                                                        onChange={handleChange}
                                                        id="category"
                                                        type="text"
                                                        placeholder="Enter event category"
                                                        className={formErrors.category ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.category && <p className="error">{formErrors.category}</p>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='san7a'>Event Image</label>
                                                    <input
                                                        name="san7a"
                                                        id="san7a"
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        className={formErrors.san7a ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.san7a && <p className="error">{formErrors.san7a}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='admin_id'>Admin ID</label>
                                                    <input
                                                        name="admin_id"
                                                        id="admin_id"
                                                        type="text"
                                                        value={formValues.admin_id}
                                                        onChange={handleChange}
                                                        placeholder="Enter admin ID"
                                                        className={formErrors.admin_id ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.admin_id && <p className="error">{formErrors.admin_id}</p>}
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <button type='submit' disabled={isSubmitting} className='btn btn-primary'>Add Event</button>
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

export default CreateEvent;
