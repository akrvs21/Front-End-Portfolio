import "./styles/App.css";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import React, { useEffect } from "react";
import MyList from "./UI/MyList/MyList";
import MyNavbar from "./UI/MyNavbar/MyNavbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
