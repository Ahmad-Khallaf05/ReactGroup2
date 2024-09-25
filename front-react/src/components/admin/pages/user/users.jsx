import React from 'react';
import  {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 

function Users() {

    
const [user, setUser] = useState([]);
const [loading, setLoading] = useState(true);

function handleDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/user/${id}/delete`).then(res=>{
        alert('The User Has Been Delete');
        setLoading(true);
    })
}



    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/user').then(res=>{
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

    let userDetails = '';
    userDetails = user.map((item, index) => {
        return (
            <>
            <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>fix</td>
                    <td>
                        <Link to={`/user-edit/${item.id}`} className="btn btn-success">Edit</Link>
                  
                        <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
                    </td>
                </tr>
            </>
        )
    });
   
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
                <a href="/create-user" className='btn btn-gradient-success btn-rounded btn-fw'>Add Student</a>
                </nav>
            </div>
            {/* content here ... */}
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Student Table</h4>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {userDetails}
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

export default Users;
