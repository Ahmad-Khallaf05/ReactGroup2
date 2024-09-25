import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../../../../schemas/index";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const CreateUser = () => {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        axios.post('http://127.0.0.1:8000/api/user', values)
            .then(response => {
                // add sweet alert
                navigate('/users');
            })
            .catch(error => {
                // add sweet alert and add the different error in status
                console.error('Error submitting form:', error);
            });

    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    return (
        <>



            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">Add Students</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/users" className='btn btn-danger float-end'>back</a>

                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Add Users
                                            </h4>
                                        </div>
                                        <div className="card-body">

                                            <form onSubmit={formik.handleSubmit} autoComplete="off">
                                                <div className="form-group mb-3">
                                                    <label htmlFor='name'>name</label>
                                                    <input value={formik.values.name}
                                                        onChange={formik.handleChange}
                                                        id="name"
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.name && formik.touched.name ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.name && formik.touched.name && <p className="error">{formik.errors.name}</p>}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='email'>email</label>
                                                    <input value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.email && formik.touched.email ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='password'>password</label>
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        placeholder="Enter your password"
                                                        value={formik.values.password}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.password && formik.touched.password ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.password && formik.touched.password && (
                                                        <p className="error">{formik.errors.password}</p>
                                                    )}
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

        </>
    )
}
export default CreateUser;



