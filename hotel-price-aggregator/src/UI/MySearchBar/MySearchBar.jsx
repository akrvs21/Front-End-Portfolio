import React from "react";
import "./styles/App.css";

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
