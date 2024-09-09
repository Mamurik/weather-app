import React, { FC } from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import classes from "./FindModal.module.css";
interface FindModalProps {
  onClick: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FindModal: FC<FindModalProps> = ({ value, onClick, onChange }) => {
  return (
    <div className={classes.wrapper}>
      <MyInput
        onChange={onChange}
        value={value}
        placeholder="Введите название города"
      />
      <MyButton onClick={onClick}>Найти</MyButton>
    </div>
  );
};

export default FindModal;
