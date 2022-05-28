import "./styles/App.css";
import ProductItem from "./Components/ProductItem";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import React, { useEffect } from "react";
import MyList from "./UI/MyList/MyList";

function App() {
  return (
    <div className="App">
      <div className="favorite-container">
        <p>Favorites</p>
        <div className="favorite"></div>
      </div>

      <div className="search-field">
        <MyInput />
        <MyButton />
        <MyList />
      </div>

      <ProductItem />
    </div>
  );
}

export default App;
