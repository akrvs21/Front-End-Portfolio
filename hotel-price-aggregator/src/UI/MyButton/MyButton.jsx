import React from "react";
import cl from "./MyButton.module.css";
import axios from "axios";

const MyButton = ({ userInput, getHotelsInLocation }) => {
  const searchLocation = (location) => {
    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
      params: { locale: "en-gb", name: location },
      headers: {
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        "X-RapidAPI-Key": "3e9a81d54bmsha56fd7ae542935ep14f5c5jsnc4d9aafcf35b",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        let destId = response.data[0].dest_id;
        let destType = response.data[0].dest_type;
        const destInfo = { destId, destType };
        getHotelsInLocation(destInfo);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={() => searchLocation(userInput)} className={cl.myButton}>
        Search
      </button>
    </div>
  );
};

export default MyButton;
