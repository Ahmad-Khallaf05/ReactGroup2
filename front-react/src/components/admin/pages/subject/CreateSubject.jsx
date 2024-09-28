import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { taskSchema } from "../../../../schemas/index";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const CreateSubject = () => {
    const navigate = useNavigate();
  
        const formik = useFormik({
        initialValues: {
            name: "",
         
    },
        validationSchema: taskSchema,
        onSubmit : async (values) => {
            console.log('hi',values);
            
            axios.post('http://127.0.0.1:8000/api/subjects', values)
                .then(response => {
                    // add sweet alert
                    navigate('/users');
                })
                .catch(error => {
                    // add sweet alert and add the different error in status
                    console.error('Error submitting form:', error);
                });
    
        },
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
                                <h3 className="page-title">Add Subjects</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/tasks" className='btn btn-danger float-end'>back</a>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Add A Subject
                                            </h4>
                                        </div>
                                        <div className="card-body">

                                            <form onSubmit={formik.handleSubmit} autoComplete="off">
                                                <div className="form-group mb-3">
                                                    <label htmlFor='title'>name</label>
                                                    <input value={formik.values.name}
                                                        onChange={formik.handleChange}
                                                        id="name"
                                                        type="text"
                                                        placeholder="Enter Subject name"
                                                        onBlur={formik.handleBlur}
                                                        className={formik.errors.name && formik.touched.name ? "input-error form-control" : "form-control"}
                                                    />
                                                    {formik.errors.name && formik.touched.name && <p className="error">{formik.errors.name}</p>}
                                                </div>
                                              
                                                <div className="form-group mb-3">
                                                    <button type='submit' disabled={formik.isSubmitting} className='btn btn-primary'>Add task</button>
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
export default CreateSubject;



