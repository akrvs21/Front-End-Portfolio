import React from "react";
import cl from "./MyButton.module.css";

const MyButton = () => {
  return (
    <div>
      <button className={cl.myButton}>Search</button>
    </div>
  );
};

export default MyButton;
