import React from 'react'

import {  useNavigate, useParams } from "react-router-dom";
import  {useEffect, useState} from 'react';
import { useFormik } from "formik";
import { basicSchema } from "../../../../schemas/index";
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const EditUser = ()=> {

    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({});

    // Fetch user data
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user/${id}`).then(res => {
            setData(res.data.user);
        }).catch(error => {
            console.error('Error fetching user:', error);
        });
    }, [id]);  // Added id as a dependency

    // Formik setup
    const formik = useFormik({
        initialValues: {
            name: data.name || '',
            email: data.email || '',
        },
        enableReinitialize: true,
        validationSchema: basicSchema,
        onSubmit: async (values) => {
            console.log('Submitting form', values);
            try {
                const response = await axios.put(`http://127.0.0.1:8000/api/user/${id}/edit`, values);
                console.log('Response:', response.data);
                navigate('/users');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
    });
function handleSubmit (values)
{
    console.log('Submitting form', values);
    try {
        // formik.handleSubmit;
        const response =  axios.put(`http://127.0.0.1:8000/api/user/${id}/edit`, values);
        console.log('Response:', response.data);
        navigate('/users');
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

  return (
    <div>
          <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">Edit Students</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/users" className='btn btn-danger float-end'>back</a>

                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Edit Users
                                            </h4>
                                        </div>
                                        <div className="card-body">

                                            <form onSubmit={()=>handleSubmit(formik.values)} autoComplete="off">
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
                                                    <button type='submit' disabled={formik.isSubmitting} className='btn btn-primary'>Edit Student</button>
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
    </div>
  )
}

export default EditUser;