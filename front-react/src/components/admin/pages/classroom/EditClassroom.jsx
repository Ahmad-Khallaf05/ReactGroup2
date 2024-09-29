import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { ClassroomSchema } from "../../../../schemas/index"; // Ensure the schema is correct
import axios from 'axios';

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const EditClassroom = () => {
    const { id } = useParams(); // Get classroom ID from URL
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            level: "",
        },
        validationSchema: ClassroomSchema, // Use ClassroomSchema
        onSubmit: async (values) => {
            try {
                await axios.put(`http://127.0.0.1:8000/api/classrooms/${id}`, values);
                fetchClassroom(); // Reload classroom data after update
                navigate('/classrooms');
            } catch (error) {
                console.error('Error updating classroom:', error);
                alert("An error occurred: " + (error.response?.data?.message || error.message));
            }
        },
    });

    const fetchClassroom = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/classrooms/${id}`); // Use GET here

            formik.setValues({
                name: response.data.classroom.name,
                level: response.data.classroom.level,
            });
        } catch (error) {
            console.error('Error fetching classroom:', error);
            alert("Failed to fetch classroom details.");
        }
    };

    useEffect(() => {
        fetchClassroom();
    }, [id]);

    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">Edit Classroom</h3>
                            <nav aria-label="breadcrumb">
                                <Link to="/classrooms" className='btn btn-danger float-end'>Back</Link>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Edit A Classroom</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={formik.handleSubmit} autoComplete="off">
                                            <div className="form-group mb-3">
                                                <label htmlFor='name'>Name</label>
                                                <input 
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    id="name"
                                                    type="text"
                                                    placeholder="Enter classroom name"
                                                    onBlur={formik.handleBlur}
                                                    className={formik.errors.name && formik.touched.name ? "input-error form-control" : "form-control"}
                                                />
                                                {formik.errors.name && formik.touched.name && <p className="error">{formik.errors.name}</p>}
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor='level'>Level</label>
                                                <input 
                                                    value={formik.values.level}
                                                    onChange={formik.handleChange}
                                                    id="level"
                                                    type="text"
                                                    placeholder="Enter classroom level"
                                                    onBlur={formik.handleBlur}
                                                    className={formik.errors.level && formik.touched.level ? "input-error form-control" : "form-control"}
                                                />
                                                {formik.errors.level && formik.touched.level && <p className="error">{formik.errors.level}</p>}
                                            </div>
                                            <div className="form-group mb-3">
                                                <button type='submit' disabled={formik.isSubmitting} className='btn btn-primary'>Update Classroom</button>
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

export default EditClassroom;
