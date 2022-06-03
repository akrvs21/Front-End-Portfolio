import React from "react";
import "../../styles/App.css";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import MyList from "../MyList/MyList";

const MySearchBar = () => {
  return (
    <div className="search-field">
      <MyInput />
      <MyButton />
      <MyList />
    </div>
  );
};

export default MySearchBar;
