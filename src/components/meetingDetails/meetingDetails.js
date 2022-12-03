import React from "react";
import "./meetingDetails.css";
const MeetingDetails = () => {
  return (
    <div className="meeting-details-wrapper">
      <p className="meeting-attendee">Gaurav Garg</p>
      <p className="meeting-title"> 15 Minute meeting</p>
      <p className="meeting-duration">
        <i class="fa-sharp fa-solid fa-clock"></i> 15 min
      </p>
      <p className="meeting-time">
        <i class="fa-regular fa-calendar"></i> 9:00am - 9:30am, Friday,
        September 10 2022
      </p>
      <p className="meeting-timezone">
        <i class="fa-solid fa-globe"></i> Indian Standard Time
      </p>
    </div>
  );
};

export default MeetingDetails;
