import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";

function EventView() {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = () => {
    axios
      .get(`http://127.0.0.1:8000/api/event/${id}`)
      .then((response) => {
        setEvent(response.data.event); // Set the event data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  if (!event) {
    return <div>Event not found.</div>; // Handle the case when event doesn't exist
  }

  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">Events </h3>
              <Link to="/Event" className="btn btn-primary">
                back
              </Link>
            </div>
            <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Event Info</h5>
                    <img src={`http://127.0.0.1:8000/${event.san7a}`} alt="student image"
                         className="img-fluid mb-2"/>

                    <p className='card-text'><b className='text-bg-info'>Event Title : </b>{event.title}</p>
                    <p className='card-text'><b>Event Description : </b>{event.description}</p>
                    <p className='card-text'><b>Event Date : </b>{event.date}</p>
                    <p className='card-text'><b>Event Category : </b>{event.category}</p>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default EventView;
