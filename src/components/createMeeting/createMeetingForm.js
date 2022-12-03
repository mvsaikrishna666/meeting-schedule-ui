import React from "react";
import AntdTextArea from "../antdTextArea/antdTextArea";
import AntdInput from "../atndInput/input";
import { Button } from "antd";

const CreateMeetingForm = ({ formValues, setFormValues, handleSubmit }) => {
  return (
    <div>
      <p className="create-meeting-header">Enter Details</p>
      <AntdInput
        label="Name *"
        value={formValues.name}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
      />
      <AntdInput
        label="Email *"
        value={formValues.email}
        onChange={(e) =>
          setFormValues({ ...formValues, email: e.target.value })
        }
      />
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
      <AntdTextArea
        label="Please share anything that will help prepare for our meeting"
        value={formValues.comment}
        onChange={(e) =>
          setFormValues({ ...formValues, comment: e.target.value })
        }
      />
      <Button
        style={{ marginTop: "32px" }}
        type="primary"
        shape="round"
        size="large"
        onClick={() => handleSubmit()}
      >
        Schedule Event
      </Button>
    </div>
  );
};

export default CreateMeetingForm;
