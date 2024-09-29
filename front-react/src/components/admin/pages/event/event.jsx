import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDeleteForever, MdEdit, MdVisibility } from "react-icons/md"; // Import the visibility icon
import { Link } from 'react-router-dom';

import Navbar from "../../Navbar"; 
import Sidebar from "../../Sidebar"; 
import Footer from "../../Footer"; 
import Swal from 'sweetalert2';

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    // Function to fetch events data from the API
    const fetchEvents = () => {
        axios.get('http://127.0.0.1:8000/api/event')
            .then(response => {
                console.log('API Response:', response.data);
                setEvents(response.data.events);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    };

    // Function to handle event deletion
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this Event?",
            showCancelButton: true,
            confirmButtonText: "Yes",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete(`http://127.0.0.1:8000/api/event/${id}`)
            .then(() => {
                Swal.fire(`Event with ID ${id} deleted successfully`, "", 'success');
                setEvents(events.filter(event => event.id !== id));
            })
            .catch(error => {
                Swal.fire('Error deleting event',"","error");
                console.error('Error deleting event:', error);
            });
          };
        
    })
};


    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">Events Table</h3>
                            <Link to="/addEvent" className="btn btn-primary">
                                Create Event
                            </Link>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Events Table</h4>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Image</th>
                                                    <th>Date</th>
                                                    <th>Category</th>
                                                    <th>View</th> {/* New column for viewing event */}
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {events.length > 0 ? (
                                                    events.map((event) => (
                                                        <tr key={event.id}>
                                                            <td>{event.title}</td>
                                                            <td>{event.description}</td>
                                                            <td>{event.san7a}</td>
                                                            <td>{event.date}</td>
                                                            <td>{event.category}</td>
                                                            <td>
                                                                <Link to={`/view-event/${event.id}`}>
                                                                    <MdVisibility
                                                                        style={{ width: 25, height: 25, cursor: 'pointer' }}
                                                                    />
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <Link to={`/edit-event/${event.id}`}>
                                                                    <MdEdit
                                                                        style={{ width: 25, height: 25, cursor: 'pointer' }}
                                                                    />
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <MdDeleteForever
                                                                    style={{ width: 25, height: 25, cursor: 'pointer' }}
                                                                    onClick={() => handleDelete(event.id)}
                                                                />
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="8">No events found</td>
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
    );
}

export default Events;
