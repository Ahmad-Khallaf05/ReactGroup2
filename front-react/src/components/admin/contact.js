import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";

import Navbar from "../../components/admin/Navbar"; 
import Sidebar from "../../components/admin/Sidebar"; 
import Footer from "../../components/admin/Footer"; 

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/contacts') 
            .then(response => {
                setContacts(response.data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = (id) => {
        console.log("Deleting contact with ID:", id);
        axios.delete(`http://127.0.0.1:8000/api/contacts/${id}`) 
            .then(() => {
                setContacts(contacts.filter(contact => contact.id !== id)); 
            })
            .catch(error => {
                console.error('Error deleting contact:', error);
            });
    };

    return (
        <div>
            <div className="container-scroller">
                <Navbar /> 
                <div className="container-fluid page-body-wrapper">
                    <Sidebar /> 
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">Contacts Table</h3>
                                <nav aria-label="breadcrumb"></nav>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Contacts Table</h4>
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Message</th>    
                                                        <th>Delete</th>    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {contacts.length > 0 ? (
                                                        contacts.map((contact) => (
                                                            <tr key={contact.id}>
                                                                <td>{contact.name}</td>
                                                                <td>{contact.email}</td>
                                                                <td>{contact.message}</td>
                                                                <td>
                                                                <MdDeleteForever style={{width: 35 , height:35}} onClick={ () => handleDelete(contact.id)}/>                                        
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="4">No contacts found</td>
                                                        </tr>
                                                    )}
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

export default Contacts;
