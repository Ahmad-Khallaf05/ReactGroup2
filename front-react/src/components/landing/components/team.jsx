import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function Team() {
const [team, setTeam] = useState([])
  useEffect(()=>{
    axios("http://127.0.0.1:8000/api/admins").then(res=>{
          setTeam(res.data.result);
        }).catch(error => console.error(error)
        )
      },[]

  )

  let content  = '';
  content = team.map((teacher, index) => {
    return (
        <>
          <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
              data-wow-delay="0.7s"
          >
            <div className="team-item border border-primary img-border-radius overflow-hidden" >
              <img src={`http://127.0.0.1:8000/${teacher.san7a}`}
                   className="img-fluid w-100" alt=""/>
              <div className="team-icon d-flex align-items-center justify-content-center">
                <a
                    className="share btn  btn-md-square text-white rounded-circle me-3"
                    href=""
                >
                  <i className="fas fa-share-alt"/>
                </a>
                <a
                    className="share-link btn  btn-md-square text-white rounded-circle me-3"
                    href=""
                >
                  <i className="fab fa-facebook-f"/>
                </a>
                <a
                    className="share-link btn  btn-md-square text-white rounded-circle me-3"
                    href=""
                >
                  <i className="fab fa-twitter"/>
                </a>
                <a
                    className="share-link btn  btn-md-square text-white rounded-circle"
                    href=""
                >
                  <i className="fab fa-instagram"/>
                </a>
              </div>
              <div className="team-content text-center py-3">
                <h4 className="text-primary">{teacher.name}</h4>
                <p className="text-muted mb-2">{teacher.role}</p>
              </div>
            </div>
          </div>
        </>
    )
  });


  return (
      <div>


        {/* Team Start*/}
        <div className="container-fluid team py-5">
          <div className="container py-5">
            <div
                className="mx-auto text-center wow fadeIn"
                data-wow-delay="0.1s"
                style={{maxWidth: 600}}
            >
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius" id={'teatcher'}>
                Our Team
              </h4>
              <h1 className="mb-5 display-3">Meet With Our Expert Teacher</h1>
            </div>
            <div className="row g-5 justify-content-center">

              {content};

            </div>
          </div>
        </div>
        {/* Team End*/}


      </div>
  )
}
