import React from 'react';
import  {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import axios from 'axios';
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";




function Show() {

    const { id } = useParams();

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/user/${id}`).then(res=>{
            setUser(res.data.user);
            setLoading(false);
        })
    },[loading])

    if(loading){
        return (
            <div className="spinner-border text-primary d-flex justify-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
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
                                <h3 className="page-title">Student Tables</h3>
                                <nav aria-label="breadcrumb">
                                    <a href="/users" className='btn btn-danger float-end'>Back</a>
                                </nav>
                            </div>
                            {/* content here ... */}
                            <div className="row">
                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Student Info</h5>
                                            <img src={`http://127.0.0.1:8000/${user.san7a}`} alt="student image"
                                                 className="img-fluid mb-2"/>
                                            <img src={`http://127.0.0.1:8000/${user.officialId}`} alt="student image"
                                                 className="img-fluid mb-2"/>
                                            <p className='card-text'><b className='text-bg-info'>Student Name : </b>{user.name}</p>
                                            <p className='card-text'><b>Student Birthdate : </b>{user.dob}</p>
                                            <p className='card-text'><b>Student Email : </b>{user.email}</p>
                                            <p className='card-text'><b>Student Gender : </b>{user.gender}</p>
                                            <h5 className="card-title">Parent Info</h5>
                                            <p className='card-text'><b>Parent Name : </b>{user.parentName}</p>
                                            <p className='card-text'><b>Parent Phone : </b>{user.parentPhone}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Show;
