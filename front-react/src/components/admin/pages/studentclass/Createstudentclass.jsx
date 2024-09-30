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
    const [users, setUsers] = useState([]); 
    const [classrooms, setClassrooms] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userResponse, classroomResponse] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/api/users'),
                    axios.get('http://127.0.0.1:8000/api/classrooms'),
                    
                ]);
                
                setUsers(userResponse.data.result || []);
                setClassrooms(classroomResponse.data.result || []);
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
        setSubmitting(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/studentclasses', values);
            console.log("Response:", response.data);
            formik.resetForm(); 
            navigate('/studentclasses');

        } catch (error) {
            console.error('Error submitting form:', error);
            setError(error.response?.data?.errors?.admin_id || "An error occurred");
        } finally {
            setSubmitting(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            user_id: "",
            classroom_id: "",
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
                                                <label htmlFor='user_id'>Select Admin</label>
                                                <select
                                                    id="user_id"
                                                    name="user_id"
                                                    {...formik.getFieldProps('user_id')}
                                                    className={formik.touched.user_id && formik.errors.user_id ? "input-error form-control" : "form-control"}
                                                >
                                                    <option value="">Choose Admin...</option>
                                                    {users.length > 0 && users.map(user => (
                                                        <option key={user.id} value={user.id}>{user.name}</option>
                                                    ))}
                                                </select>
                                                {formik.touched.user_id && formik.errors.user_id && <p className="error">{formik.errors.user_id}</p>}
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor='classroom_id'>Select Class</label>
                                                <select
                                                    id="classroom_id"
                                                    name="classroom_id"
                                                    {...formik.getFieldProps('classroom_id')}
                                                    className={formik.touched.classroom_id && formik.errors.classroom_id ? "input-error form-control" : "form-control"}
                                                >
                                                    <option value="">Choose Class...</option>
                                                    {classrooms.length > 0 && classrooms.map(classroom => (
                                                        <option key={classroom.id} value={classroom.id}>{classroom.name}</option>
                                                    ))}
                                                </select>
                                                {formik.touched.classroom_id && formik.errors.classroom_id && <p className="error">{formik.errors.classroom_id}</p>}
                                            </div>

                                            <div className="form-group mb-3">
                                                <button type='submit' disabled={formik.isSubmitting || submitting} className='btn btn-primary'>
                                                    {submitting ? "Adding..." : "Add Classroom"}
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
    );
};

export default CreateStudentclasses;
