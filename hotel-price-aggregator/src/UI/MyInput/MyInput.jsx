import React from "react";
import cl from "./MyInput.module.css";

const MyInput = () => {
  return (
    <div>
      <input type="text" placeholder="Where are you going?" className={cl.myInput}></input>
    </div>
  );
};

export default MyInput;
