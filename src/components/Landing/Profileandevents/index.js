import React from "react";

import linkedin from "../../images/linkedin.png";
export default function Profileandevents(){
    return(
        <>
        <div className="prof-and-events">
          <div className="common-prof">
            <div className="common-prof-info">
              <div
                style={{ display: "flex", alignItems: "center", width: "95%" }}
              >
                <div className="prof-image-common">
                 
                </div>
                <span style={{width:'5%'}}></span>
                <div className="user-name">
                  
                </div>
                <span style={{width:'30%'}}></span>
                <img src={linkedin} />
              </div>
              <div className="view-my-prof">
                View Profile
              </div>
            </div>
          </div>
          <div className="event-upcoming">
            <div className="header-events">
              <h2>Upcoming Events</h2>
            </div>
              <div className="event-list">
                <div className="event-1"></div>
                <div className="event-1"></div>
                <div className="event-1"></div>
                

              </div>
            
          </div>
        </div>
        </>
    )
}