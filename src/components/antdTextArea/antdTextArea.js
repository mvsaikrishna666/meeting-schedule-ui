import React from "react";
import { Input } from "antd";
import "../atndInput/input.css";
const { TextArea } = Input;
const AntdTextArea = ({ label }) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <TextArea rows={5} size="large" />
    </div>
  );
};

export default AntdTextArea;
