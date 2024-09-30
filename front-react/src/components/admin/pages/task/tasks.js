import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 
import axios from "axios"
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Swal from 'sweetalert2';

function Tasks() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/')
            .then(res => setData(res.data.tasks))
            .catch(error => console.error(error));
    }, []);

    function handleDelete(id) {
        Swal.fire({
            title: "Are you sure you want to delete this Task?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/delete`).then(res => {
                    setData(prevData => prevData.filter(task => task.id !== id)); // تحديث البيانات
                    Swal.fire('Deleted!', 'The task has been deleted.', 'success');
                });
            }
        });
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
                                <h3 className="page-title">Tasks</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/create-task" className='btn btn-gradient-success btn-rounded btn-fw'>Add Task</a>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Tasks Table</h4>
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Title</th>
                                                        <th>San7a</th>
                                                        <th>Deadline</th>
                                                        <th>Description</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map(task => (
                                                            <tr key={task.id}> {/* خاصية key الفريدة */}
                                                                <td>{task.id}</td> {/* عرض الـ id */}
                                                                <td>{task.title}</td>
                                                                <td>
                                                                    {task.san7a ? (
                                                                        <img src={`http://127.0.0.1:8000/uploads/tasks/${task.san7a}`} alt="san7a" width="50" />
                                                                    ) : (
                                                                        <p>No Image</p>
                                                                    )}
                                                                </td>
                                                                
                                                                <td>{task.description}</td>
                                                                <td>
                                                                    <Link to={`/task-edit/${task.id}`}>
                                                                        <MdEdit style={{ width: 25, height: 25 }} />
                                                                    </Link>
                                                                    <MdDeleteForever style={{ width: 25, height: 25 }} onClick={() => handleDelete(task.id)} />
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
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
    );
}

export default Tasks;
