import React from "react";
import { Input } from "antd";
import "./input.css";

const AntdInput = ({ label, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <Input size="large" value={value} onChange={onChange} />
    </div>
  );
};

export default AntdInput;
