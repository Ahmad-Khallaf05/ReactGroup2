import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function Event() {

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

  let content ='';
  content = events.map((event, index) => {
    return (
        <>
          <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.1s"
          >
            <div className="events-item bg-primary rounded" >
              <div className="events-inner position-relative">
                <div className="events-img overflow-hidden rounded-circle position-relative">
                  <img
                      src={`http://127.0.0.1:8000/${event.san7a}`}
                      className="img-fluid w-100 rounded-circle"
                      alt="Image"
                  />
                </div>
                <div className="d-flex justify-content-between px-4 py-2">
                  <small className="text-white">
                    <i className="fas fa-calendar me-1 text-primary"/> {event.date}
                  </small>
                  <small className="text-white">
                    <i className="fas fa-map-marker-alt me-1 text-primary"/>{event.category}
                  </small>
                </div>
              </div>
              <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                <a href="#" className="h4">
                  {event.title}
                </a>
                <p className="mb-0 mt-3">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        </>
    )
  });
  return (
      <div>


        {/* Events Start */}
        <div className="container-fluid events py-5 bg-light">
          <div className="container py-5">
            <div
                className="mx-auto text-center wow fadeIn"
                data-wow-delay="0.1s"
                style={{maxWidth: 700}}
            >
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius" id={'event'}>
                Our Events
              </h4>
              <h1 className="mb-5 display-3">Our Upcoming Events</h1>
            </div>
            <div className="row g-5 justify-content-center">

              {content}
            </div>
          </div>
        </div>
        {/* Events End*/}


      </div>
  )
}
