import React from "react";

export const Input = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Type a new todo"
  />
);
