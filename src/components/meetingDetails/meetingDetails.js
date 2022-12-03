import React from "react";
import "./meetingDetails.css";
const MeetingDetails = ({ name, title, duration, time, timeZone }) => {
  return (
    <div className="meeting-details-wrapper">
      <p className="meeting-attendee">{name}</p>
      <p className="meeting-title">{title}</p>
      <p className="meeting-duration">
        <i className="fa-sharp fa-solid fa-clock"></i> {duration}
      </p>
      <p className="meeting-time">
        <i className="fa-regular fa-calendar"></i> {time}
      </p>
      <p className="meeting-timezone">
        <i className="fa-solid fa-globe"></i> {timeZone}
      </p>
    </div>
  );
};

export default MeetingDetails;
