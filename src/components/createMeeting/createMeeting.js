import React from "react";
import AntdInput from "../atndInput/input";
import "./createMeeting.css";
import { Button } from "antd";
import AntdTextArea from "../antdTextArea/antdTextArea";

const CreateMeeting = () => {
  return (
    <div className="create-meeting-wrapper">
      <p className="create-meeting-header">Enter Details</p>
      <AntdInput label="Name *" />
      <AntdInput label="Email *" />
      <Button
        style={{
          color: "#1677ff",
          borderColor: "#1677ff",
          marginBottom: "20px",
        }}
        type="default"
        shape="round"
        size="large"
      >
        Add Guests
      </Button>
      <AntdTextArea label="Please share anything" />
      <Button
        style={{ marginTop: "32px" }}
        type="primary"
        shape="round"
        size="large"
      >
        Schedule Event
      </Button>
    </div>
  );
};

export default CreateMeeting;
