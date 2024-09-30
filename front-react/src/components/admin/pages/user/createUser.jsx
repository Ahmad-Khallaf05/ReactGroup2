import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const CreateUser = () => {
    const navigate = useNavigate();

    // State for form fields
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "Male",
        parentName: "",
        parentPhone: "",
        san7a: null,
        officialId: null,
        password: ""
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
            [name]: files[0]
        });
    };

    // Handle form validation (basic validation)
    const validate = () => {
        let errors = {};

        if (!formValues.name) errors.name = "Name is required";
        if (!formValues.email) errors.email = "Email is required";
        if (!formValues.dob) errors.dob = "Date of Birth is required";
        if (!formValues.parentName) errors.parentName = "Parent Name is required";
        if (!formValues.parentPhone) errors.parentPhone = "Parent Phone is required";
        if (!formValues.password) errors.password = "Password is required";

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
                await axios.post('http://127.0.0.1:8000/api/user', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                navigate('/users');
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
                                <a href="/users" className='btn btn-danger'>Back</a>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add Student</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit} autoComplete="off" >
                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='name'>Name</label>
                                                    <input
                                                        name="name"
                                                        value={formValues.name}
                                                        onChange={handleChange}
                                                        id="name"
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        className={formErrors.name ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.name && <p className="error">{formErrors.name}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='email'>Email</label>
                                                    <input
                                                        name="email"
                                                        value={formValues.email}
                                                        onChange={handleChange}
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className={formErrors.email ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor='dob'>Date of Birth</label>
                                                    <input
                                                        name="dob"
                                                        id="dob"
                                                        type="date"
                                                        value={formValues.dob}
                                                        onChange={handleChange}
                                                        className={formErrors.dob ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.dob && <p className="error">{formErrors.dob}</p>}
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor='gender'>Gender</label>
                                                    <select
                                                        name="gender"
                                                        id="gender"
                                                        className="form-control"
                                                        value={formValues.gender}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="Male">Choose Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='parentName'>Parent Name</label>
                                                    <input
                                                        name="parentName"
                                                        value={formValues.parentName}
                                                        onChange={handleChange}
                                                        id="parentName"
                                                        type="text"
                                                        placeholder="Enter Parent's Name"
                                                        className={formErrors.parentName ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.parentName && <p className="error">{formErrors.parentName}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='parentPhone'>Parent Phone</label>
                                                    <input
                                                        name="parentPhone"
                                                        value={formValues.parentPhone}
                                                        onChange={handleChange}
                                                        id="parentPhone"
                                                        type="text"
                                                        placeholder="Enter Parent's Phone"
                                                        className={formErrors.parentPhone ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.parentPhone && <p className="error">{formErrors.parentPhone}</p>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='san7a'>Student Image</label>
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
                                                    <label htmlFor='officialId'>Official ID/Documents</label>
                                                    <input
                                                        name="officialId"
                                                        id="officialId"
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        className={formErrors.officialId ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formErrors.officialId && <p className="error">{formErrors.officialId}</p>}
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor='password'>Password</label>
                                                <input
                                                    name="password"
                                                    id="password"
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    value={formValues.password}
                                                    onChange={handleChange}
                                                    className={formErrors.password ? "input-error form-control" : "form-control"}
                                                />
                                                {formErrors.password && <p className="error">{formErrors.password}</p>}
                                            </div>

                                            <div className="form-group mb-3">
                                                <button type='submit' disabled={isSubmitting} className='btn btn-primary'>Add User</button>
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

export default CreateUser;
