import React from "react";
import "./App.css";
import MeetingDetails from "./components/meetingDetails/meetingDetails";
import CreateMeeting from "./components/createMeeting/createMeeting";
function App() {
  return (
    <div className="App">
      <MeetingDetails />
      <CreateMeeting />
    </div>
  );
}

export default App;
