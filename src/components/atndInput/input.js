import React from "react";
import { Input } from "antd";
import "./input.css";

const AntdInput = ({ label }) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <Input size="large" />
    </div>
  );
};

export default AntdInput;
