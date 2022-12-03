import React from "react";
import "./App.css";
import MeetingDetails from "./components/meetingDetails/meetingDetails";
import CreateMeeting from "./components/createMeeting/createMeeting";
function App() {
  return (
    <div className="App">
      <MeetingDetails
        name="Gaurav Garg"
        title="15 Minute meeting"
        duration="15 min"
        time="9:00am - 9:30am, Friday, September 10 2022"
        timeZone="Indian Standard Time"
      />
      <CreateMeeting />
    </div>
  );
}

export default App;
