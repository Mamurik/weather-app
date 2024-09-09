import React, { FC } from "react";
import classes from "./MyBtutton.module.css";
interface MyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const MyButton: FC<MyButtonProps> = ({ onClick, children }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      <p className={classes.button_text}>{children}</p>
    </button>
  );
};

export default MyButton;
