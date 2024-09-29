import React from 'react';
import  {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { MdDeleteForever } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { MdVisibility } from 'react-icons/md';
function Users() {
    
    const MySwal = withReactContent(Swal)
    
const [user, setUser] = useState([]);
const [loading, setLoading] = useState(true);

function handleDelete(id){
    Swal.fire({
        title: "Are you sure you want to delete this user?",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/user/${id}/delete`).then(res=>{
                // alert('The User Has Been Delete');
                Swal.fire("Deleted!", "", "success");
                setLoading(true);
            })
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    // axios.delete(`http://127.0.0.1:8000/api/user/${id}/delete`).then(res=>{
    //     alert('The User Has Been Delete');
    //     setLoading(true);
    // })
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
function Image (image){
        if(image){
            return (
                <>
                    < img src={`http://127.0.0.1:8000/${image}`} alt="student"  />
                </>
            )
        }
        else
        {
            return (
                <>
                    < img src="https://afn.ca/wp-content/uploads/2022/12/unknown_staff-500x500.webp" alt="student"  />
                </>
            )
        }

}
    let userDetails = '';
    userDetails = user.map((item, index) => {
        return (
            <>
            <tr key={index}>
                    <td>{Image(item.san7a)}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.dob}</td>
                    <td>{item.parentPhone}</td>
                    <td>
                        <Link to={`/user-show/${item.id}`}>
                        <MdVisibility
                                                                        style={{ width: 25, height: 25, cursor: 'pointer' }}
                                                                    />
                        </Link>
                        <Link to={`/user-edit/${item.id}`}>
                        <MdEdit style={{width: 25 , height:25 , cursor: 'pointer'}} /></Link>
                        <MdDeleteForever onClick={()=>handleDelete(item.id)} style={{width: 25 , height:25 , cursor: 'pointer'}}/>
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
                                        <th>Parent Phone</th>
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
