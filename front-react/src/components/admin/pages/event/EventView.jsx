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
              <h3 className="page-title">Events Table</h3>
              <Link to="/Event" className="btn btn-primary">
                back
              </Link>
            </div>
            <div>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>
                <strong>Image:</strong> {event.san7a}
              </p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Category:</strong> {event.category}
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default EventView;
