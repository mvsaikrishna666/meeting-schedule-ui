import React from "react";
import { Input } from "antd";
import "../atndInput/input.css";
const { TextArea } = Input;
const AntdTextArea = ({ label, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <TextArea rows={5} size="large" value={value} onChange={onChange} />
    </div>
  );
};

export default AntdTextArea;
