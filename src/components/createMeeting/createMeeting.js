import React, { useState } from "react";
import "./createMeeting.css";
import { Button, Modal, message } from "antd";
import CreateMeetingForm from "./createMeetingForm";

const initialFormValues = {
  name: "",
  email: "",
  comment: "",
};

const CreateMeeting = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Meeting Scheduled",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please fill all the fields",
    });
  };
  const handleSubmit = () => {
    let validate = Object.values(formValues).every((x) => x !== "");
    if (validate) {
      setIsModalOpen(true);
    } else {
      error();
    }
  };
  return (
    <div className="create-meeting-wrapper">
      {contextHolder}
      <CreateMeetingForm
        formValues={formValues}
        setFormValues={setFormValues}
        handleSubmit={handleSubmit}
      />
      <Modal
        title="Event Details"
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
          setFormValues(initialFormValues);
          success();
        }}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>{formValues.name}</p>
        <p>{formValues.email}</p>
        <p>{formValues.comment}</p>
      </Modal>
    </div>
  );
};

export default CreateMeeting;
