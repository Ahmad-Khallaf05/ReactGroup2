import React, { useEffect, useState } from 'react';
import {json, useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        dob: '',
        gender: 'Male',
        parentName: '',
        parentPhone: '',
        san7a: null,
        officialId: null,
    });
    const [errors, setErrors] = useState({});

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/user/${id}`);
                setData(res.data.user);
                setFormValues({
                    name: res.data.user.name,
                    email: res.data.user.email,
                    dob: res.data.user.dob,
                    gender: res.data.user.gender,
                    parentName: res.data.user.parentName,
                    parentPhone: res.data.user.parentPhone,
                    san7a: res.data.user.san7a,
                    officialId: res.data.user.officialId,
                });
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUserData();
    }, [id]);

    const validate = () => {
        const newErrors = {};
        if (!formValues.name) newErrors.name = "Name is required";
        if (!formValues.email) newErrors.email = "Email is required";
        if (!formValues.dob) newErrors.dob = "Date of Birth is required";
        if (!formValues.parentName) newErrors.parentName = "Parent Name is required";
        if (!formValues.parentPhone) newErrors.parentPhone = "Parent Phone is required";
        // if (formValues.san7a === null) newErrors.san7a = "Student Image is required";
        // if (formValues.officialId === null) newErrors.officialId = "Official ID/Documents is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return;

        const formData = new FormData();
        Object.entries(formValues).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            await axios.put(`http://127.0.0.1:8000/api/user/${id}/edit`, formValues);
            navigate('/users');
        } catch (err) {
            console.log('Error details:', err.response ? err.response.data : err.message);
            // setError(Failed to update user: ${err.response ? err.response.data.message : err.message});
            console.log('User data that failed to send:', formValues);
        }
    };

    const handleChange = (event) => {
        const { id, value, type, files } = event.target;
        setFormValues({
            ...formValues,
            [id]: type === 'file' ? files[0] : value,
        });
    };

    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">Edit Students</h3>
                            <nav aria-label="breadcrumb">
                                <a href="/users" className='btn btn-danger float-end'>Back</a>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Edit Users</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={onSubmit} autoComplete="off" encType={'multipart/form-data'}>
                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='name'>Name</label>
                                                    <input
                                                        value={formValues.name}
                                                        onChange={handleChange}
                                                        id="name"
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        className={errors.name ? "input-error form-control" : "form-control"}
                                                    />
                                                    {errors.name && <p className="error">{errors.name}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='email'>Email</label>
                                                    <input
                                                        value={formValues.email}
                                                        onChange={handleChange}
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className={errors.email ? "input-error form-control" : "form-control"}
                                                    />
                                                    {errors.email && <p className="error">{errors.email}</p>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor='dob'>Date of Birth</label>
                                                    <input
                                                        id="dob"
                                                        type="date"
                                                        value={formValues.dob}
                                                        onChange={handleChange}
                                                        className={errors.dob ? "input-error form-control" : "form-control"}
                                                    />
                                                    {errors.dob && <p className="error">{errors.dob}</p>}
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor='gender'>Gender</label>
                                                    <select
                                                        id="gender"
                                                        className="form-control"
                                                        value={formValues.gender}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='parentName'>Parent Name</label>
                                                    <input
                                                        value={formValues.parentName}
                                                        onChange={handleChange}
                                                        id="parentName"
                                                        type="text"
                                                        placeholder="Enter your Parent Name"
                                                        className={errors.parentName ? "input-error form-control" : "form-control"}
                                                    />
                                                    {errors.parentName && <p className="error">{errors.parentName}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='parentPhone'>Parent Phone</label>
                                                    <input
                                                        value={formValues.parentPhone}
                                                        onChange={handleChange}
                                                        id="parentPhone"
                                                        type="text"
                                                        placeholder="Enter your Parent Phone"
                                                        className={errors.parentPhone ? "input-error form-control" : "form-control"}
                                                    />
                                                    {errors.parentPhone && <p className="error">{errors.parentPhone}</p>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='san7a'>Student Image</label>
                                                    <input
                                                        id="san7a"
                                                        type="file"
                                                        onChange={handleChange}
                                                        className={errors.san7a ? "input-error form-control" : "form-control"}
                                                    />
                                                    {errors.san7a && <p className="error">{errors.san7a}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='officialId'>Official ID/Documents</label>
                                                    <input
                                                        id="officialId"
                                                        type="file"
                                                        onChange={handleChange}
                                                        className={errors.officialId ? "input-error form-control" : "form-control"}
                                                    />
                                                    {errors.officialId && <p className="error">{errors.officialId}</p>}
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <button type='submit' className='btn btn-primary'>
                                                    Update User
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
}

export default EditUser;
