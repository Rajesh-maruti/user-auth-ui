import React from "react";
import { TextField as InputField } from "@mui/material";

const TextField = ({
  label = "",
  variant = "standard",
  classes = "w-full",
  onClick,
  onChange,
  onFocus,
  onBlur,
  containerClass = "w-full",
  value,
  error,
  touched,
  name,
  type='text'
}) => {
  return (
    <div className={containerClass}>
      <InputField
        label={label}
        variant={variant}
        className={classes}
        onChange={onChange}
        onFocus={onFocus}
        onClick={onClick}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        error={error && touched}
      />
      <p className="text-xs mt-1 text-red-500 font-roboto mb-1 h-5">
        {error && touched ? error : ""}
      </p>
    </div>
  );
};

export default TextField;
