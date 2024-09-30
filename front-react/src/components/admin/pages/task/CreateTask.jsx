import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { taskySchema } from "../../../../schemas/index"; 
import axios from 'axios';
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import Swal from 'sweetalert2';

const CreateTask = () => {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('description', values.description);
            formData.append('san7a', values.san7a);  
    
            const response = await axios.post('http://127.0.0.1:8000/api/tasks', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire({
                title: 'Success!',
                text: 'Task Created Successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate('/tasks');  

        } catch (error) {
            console.log("Error submitting form:", error.response ? error.response.data : error.message);
            Swal.fire({
                title: 'Error!',
                text: 'There was an error creating the task.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };
    
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            san7a: null  
        },
        validationSchema: taskySchema, 
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
                                <h3 className="page-title">Add Tasks</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/tasks" className='btn btn-danger float-end'>Back</a>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Add A Task</h4>
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
                                                    <label htmlFor='description'>Description</label>
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
                                                {/* <div className="form-group mb-3">
                                                    <label htmlFor='san7a'>San7a</label>
                                                    <input
                                                        id="san7a"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(event) => {
                                                            formik.setFieldValue("san7a", event.currentTarget.files[0]); 
                                                        }}
                                                        className={formik.errors.san7a && formik.touched.san7a ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.san7a && formik.touched.san7a && (
                                                        <p className="error">{formik.errors.san7a}</p>
                                                    )}
                                                </div> */}

                                                <div className="form-group mb-3">
                                                    <button type='submit' disabled={formik.isSubmitting} className='btn btn-primary'>
                                                        {formik.isSubmitting ? 'Submitting...' : 'Add task'}
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
        </>
    );
};

export default CreateTask;
