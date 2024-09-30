import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ClassroomSchema } from "../../../../schemas/index";
import axios from 'axios';
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const CreateClassroom = () => {
    const navigate = useNavigate();
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/admins');
                setAdmins(response.data.result);
            } catch (error) {
                console.error('Error fetching admins:', error);
                setError("An error occurred while fetching admins.");
            } finally {
                setLoading(false);
            }
        };

        fetchAdmins();
    }, []);

    const onSubmit = async (values) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/classrooms', values);
            console.log("Response:", response.data);
            formik.resetForm(); // Reset form after successful submission
            navigate('/classrooms');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("An error occurred: " + (error.response?.data?.errors?.admin_id || error.message));
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            level: "",
            admin_id: "",
        },
        validationSchema: ClassroomSchema,
        onSubmit,
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">Add Classroom</h3>
                            <nav aria-label="breadcrumb">
                                <Link to="/classrooms" className='btn btn-danger float-end'>Back</Link>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add A Classroom</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={formik.handleSubmit} autoComplete="off">
                                            <div className="form-group mb-3">
                                                <label htmlFor='name'>Name</label>
                                                <input 
                                                    {...formik.getFieldProps('name')}
                                                    id="name"
                                                    type="text"
                                                    placeholder="Enter classroom name"
                                                    className={formik.touched.name && formik.errors.name ? "input-error form-control" : "form-control"}
                                                />
                                                {formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor='level'>Level</label>
                                                <input 
                                                    {...formik.getFieldProps('level')}
                                                    id="level"
                                                    type="text"
                                                    placeholder="Enter classroom level"
                                                    className={formik.touched.level && formik.errors.level ? "input-error form-control" : "form-control"}
                                                />
                                                {formik.touched.level && formik.errors.level && <p className="error">{formik.errors.level}</p>}
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor='admin_id'>Select Admin</label>
                                                <select
                                                    id="admin_id"
                                                    name="admin_id"
                                                    {...formik.getFieldProps('admin_id')}
                                                    className={formik.touched.admin_id && formik.errors.admin_id ? "input-error form-control" : "form-control"}
                                                >
                                                    <option value="">Choose Admin...</option>
                                                    {admins.map(admin => (
                                                        <option key={admin.id} value={admin.id}>{admin.name}</option>
                                                    ))}
                                                </select>
                                                {formik.touched.admin_id && formik.errors.admin_id && <p className="error">{formik.errors.admin_id}</p>}
                                            </div>

                                            <div className="form-group mb-3">
                                                <button type='submit' disabled={formik.isSubmitting} className='btn btn-primary'>Add Classroom</button>
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

export default CreateClassroom;
