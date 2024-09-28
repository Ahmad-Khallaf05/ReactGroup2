import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { taskSchema } from "../../../../schemas/index";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const EditTask = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        axios.put(`http://127.0.0.1:8000/api/tasks/${id}/edit`, values)
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
            title: "",
            description: "",
            deadline: "",
            progress: 0
        },
        validationSchema: taskSchema,
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
                                <h3 className="page-title">Edit Tasks</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/tasks" className='btn btn-danger float-end'>back</a>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Edit A task
                                            </h4>
                                        </div>
                                        <div className="card-body">

                                            <form onSubmit={formik.handleSubmit} autoComplete="off">
                                                <div className="form-group mb-3">
                                                    <label htmlFor='title'>Title</label>
                                                    <input value={formik.values.title}
                                                        onChange={formik.handleChange}
                                                        id="title"
                                                        type="text"
                                                        placeholder="Enter Task title"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.title && formik.touched.title ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.title && formik.touched.title && <p className="error">{formik.errors.title}</p>}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='description'>description</label>
                                                    <input value={formik.values.description}
                                                        onChange={formik.handleChange}
                                                        id="description"
                                                        type="text"
                                                        placeholder="Enter Task description"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.description && formik.touched.description ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.description && formik.touched.description && <p className="error">{formik.errors.description}</p>}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='deadline'>deadline</label>
                                                    <input
                                                        id="deadline"
                                                        type="text"
                                                        placeholder="Enter task deadline"
                                                        value={formik.values.deadline}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.deadline && formik.touched.deadline ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.deadline && formik.touched.deadline && (
                                                        <p className="error">{formik.errors.deadline}</p>
                                                    )}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor='progress'>progress</label>
                                                    <input
                                                        id="progress"
                                                        type="number"
                                                        placeholder="Enter task progress"
                                                        value={formik.values.progress}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.progress && formik.touched.progress ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.progress && formik.touched.progress && (
                                                        <p className="error">{formik.errors.progress}</p>
                                                    )}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <button type='submit' disabled={formik.isSubmitting} className='btn btn-primary'>Edit task</button>
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
export default EditTask;



