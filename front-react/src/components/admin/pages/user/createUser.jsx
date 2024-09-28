import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../../../../schemas/index";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const CreateUser = () => {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const formData = new FormData();

        // Append form values to FormData
        Object.keys(values).forEach(key => {
            formData.append(key, values[key]);
        });

        try {
            console.log(formData);
            await axios.post('http://127.0.0.1:8000/api/user', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/users');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form:', error);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            dob: "",
            gender: "",
            parentName: "",
            parentPhone: "",
            san7a: null,
            officialId: null,
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <nav aria-label="breadcrumb">
                                <a href="/users" className='btn btn-danger'>back</a>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add Student</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={formik.handleSubmit} autoComplete="off" >
                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='name'>Name</label>
                                                    <input
                                                        value={formik.values.name}
                                                        onChange={formik.handleChange}
                                                        id="name"
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.name && formik.touched.name ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.name && formik.touched.name && <p className="error">{formik.errors.name}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='email'>Email</label>
                                                    <input
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.email && formik.touched.email ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor='dob'>Date of Birth</label>
                                                    <input
                                                        id="dob"
                                                        type="date"
                                                        value={formik.values.dob}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.dob && formik.touched.dob ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.dob && formik.touched.dob && <p className="error">{formik.errors.dob}</p>}
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor='gender'>Gender</label>
                                                    <select
                                                        id="gender"
                                                        className="form-control"
                                                        value={formik.values.gender}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
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
                                                        value={formik.values.parentName}
                                                        onChange={formik.handleChange}
                                                        id="parentName"
                                                        type="text"
                                                        placeholder="Enter your Parent Name"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.parentName && formik.touched.parentName ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.parentName && formik.touched.parentName && <p className="error">{formik.errors.parentName}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='parentPhone'>Parent Phone</label>
                                                    <input
                                                        value={formik.values.parentPhone}
                                                        onChange={formik.handleChange}
                                                        id="parentPhone"
                                                        type="text"
                                                        placeholder="Enter your Parent Phone"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.parentPhone && formik.touched.parentPhone ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.parentPhone && formik.touched.parentPhone && <p className="error">{formik.errors.parentPhone}</p>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='san7a'>Student Image</label>
                                                    <input
                                                        id="san7a"
                                                        type="file"
                                                        onChange={(event) => {
                                                            formik.setFieldValue("san7a", event.currentTarget.files[0]);
                                                        }}
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.san7a && formik.touched.san7a ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.san7a && formik.touched.san7a && <p className="error">{formik.errors.san7a}</p>}
                                                </div>
                                                <div className="form-group mb-3 col-6">
                                                    <label htmlFor='officialId'>Official ID/Documents</label>
                                                    <input
                                                        id="officialId"
                                                        type="file"
                                                        onChange={(event) => {
                                                            formik.setFieldValue("officialId", event.currentTarget.files[0]);
                                                        }}
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.officialId && formik.touched.officialId ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.officialId && formik.touched.officialId && <p className="error">{formik.errors.officialId}</p>}
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor='password'>Password</label>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={formik.errors.password && formik.touched.password ? "input-error form-control" : "form-control"}
                                                />
                                                {formik.errors.password && formik.touched.password && <p className="error">{formik.errors.password}</p>}
                                            </div>

                                            <div className="form-group mb-3">
                                                <button type='submit' disabled={formik.isSubmitting} className='btn btn-primary'>Add User</button>
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
