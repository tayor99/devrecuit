import React from "react";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="customInput"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
