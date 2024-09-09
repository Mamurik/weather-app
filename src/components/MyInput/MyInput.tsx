import React, { FC } from "react";
import classes from "./MyInput.module.css";
interface MyInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const MyInput: FC<MyInputProps> = ({ onChange, value, placeholder }) => {
  return (
    <input
      className={classes.inpt}
      type="text"
      onChange={onChange}
      value={value}
      placeholder="placeholder"
    />
  );
};

export default MyInput;
