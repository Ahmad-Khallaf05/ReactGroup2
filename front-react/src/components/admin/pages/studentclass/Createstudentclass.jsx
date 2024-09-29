import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { StudentclassSchema } from "../../../../schemas/index";
import axios from 'axios';
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const CreateStudentclasses = () => {
    const navigate = useNavigate();
    const [admins, setAdmins] = useState([]); 
    const [classrooms, setClassrooms] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [adminResponse, classResponse] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/api/admins'),
                    axios.get('http://127.0.0.1:8000/api/classrooms')
                ]);
                setAdmins(adminResponse.data.result || []);
                setClassrooms(classResponse.data.result || []);
                console.log("Classrooms:", classResponse.data.result); 
            } catch (error) {
                console.error('Error fetching data:', error);
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    const onSubmit = async (values) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/studentclasses', values);
            console.log("Response:", response.data);
            formik.resetForm(); 
            navigate('/studentclasses');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("An error occurred: " + (error.response?.data?.errors?.admin_id || error.message));
        }
    };

    const formik = useFormik({
        initialValues: {
            admin_id: "",
            class_id: "",
        },
        validationSchema: StudentclassSchema,
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
                            <h3 className="page-title">Add Student Class</h3>
                            <nav aria-label="breadcrumb">
                                <Link to="/studentclasses" className='btn btn-danger float-end'>Back</Link>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add A Student Class</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={formik.handleSubmit} autoComplete="off">
                                            <div className="form-group mb-3">
                                                <label htmlFor='admin_id'>Select Admin</label>
                                                <select
                                                    id="admin_id"
                                                    name="admin_id"
                                                    {...formik.getFieldProps('admin_id')}
                                                    className={formik.touched.admin_id && formik.errors.admin_id ? "input-error form-control" : "form-control"}
                                                >
                                                    <option value="">Choose Admin...</option>
                                                    {admins.length > 0 && admins.map(admin => (
                                                        <option key={admin.id} value={admin.id}>{admin.name}</option>
                                                    ))}
                                                </select>
                                                {formik.touched.admin_id && formik.errors.admin_id && <p className="error">{formik.errors.admin_id}</p>}
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor='class_id'>Select Class</label>
                                                <select
                                                    id="class_id"
                                                    name="class_id"
                                                    {...formik.getFieldProps('class_id')}
                                                    className={formik.touched.class_id && formik.errors.class_id ? "input-error form-control" : "form-control"}
                                                >
                                                    <option value="">Choose Class...</option>
                                                    {classrooms.length > 0 && classrooms.map(classroom => (
                                                        <option key={classroom.id} value={classroom.id}>{classroom.name}</option>
                                                    ))}
                                                </select>
                                                {formik.touched.class_id && formik.errors.class_id && <p className="error">{formik.errors.class_id}</p>}
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

export default CreateStudentclasses;
