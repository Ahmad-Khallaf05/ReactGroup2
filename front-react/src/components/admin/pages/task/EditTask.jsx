import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { taskySchema } from "../../../../schemas/index";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import Swal from 'sweetalert2';

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/tasks/${id}`).then(res => {
            setData(res.data.task);
        }).catch(error => {
            console.error('Error fetching task:', error);
        });
    }, [id]);

    const onSubmit = async (values) => {
        const { title, description, deadline } = values; // Exclude progress
        axios.put(`http://127.0.0.1:8000/api/tasks/${id}/edit`, { title, description, deadline })
            .then(response => {
                Swal.fire('Success!', 'Task updated successfully.', 'success'); // Add success alert
                navigate('/tasks');
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                Swal.fire('Error!', 'There was an error updating the task.', 'error'); // Add error alert
            });
    };

    const formik = useFormik({
        initialValues: {
            title: data.title || '', // Ensure initial values are strings
            description: data.description || '',
            deadline: data.deadline || ''
        },
        validationSchema: taskySchema,
        enableReinitialize: true,
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
                            <h3 className="page-title">Edit Task</h3>
                            <nav aria-label="breadcrumb">
                                <Link to="/tasks" className='btn btn-danger float-end'>Back</Link>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Edit a Task</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={formik.handleSubmit} autoComplete="off">
                                            <div className="form-group mb-3">
                                                <label htmlFor='title'>Title</label>
                                                <input
                                                    value={formik.values.title}
                                                    onChange={formik.handleChange}
                                                    id="title"
                                                    type="text"
                                                    placeholder="Enter Task Title"
                                                    onBlur={formik.handleBlur}
                                                    className={formik.errors.title && formik.touched.title ? "input-error form-control" : "form-control"}
                                                />
                                                {formik.errors.title && formik.touched.title && <p className="error">{formik.errors.title}</p>}
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor='description'>Description</label>
                                                <input
                                                    value={formik.values.description}
                                                    onChange={formik.handleChange}
                                                    id="description"
                                                    type="text"
                                                    placeholder="Enter Task Description"
                                                    onBlur={formik.handleBlur}
                                                    className={formik.errors.description && formik.touched.description ? "input-error form-control" : "form-control"}
                                                />
                                                {formik.errors.description && formik.touched.description && <p className="error">{formik.errors.description}</p>}
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor='deadline'>Deadline</label>
                                                <input
                                                    id="deadline"
                                                    type="text"
                                                    placeholder="Enter Task Deadline"
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
                                                <button type='submit' disabled={formik.isSubmitting} className='btn btn-primary'>Edit Task</button>
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

export default EditTask;
