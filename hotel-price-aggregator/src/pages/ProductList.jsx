import React, { useState, useEffect, useMemo } from "react";
import ProductItem from "../Components/ProductItem";
import MyNavbar from "../UI/MyNavbar/MyNavbar";
import MySearchBar from "../UI/MySearchBar/MySearchBar";

import axios from "axios";

const ProductList = () => {
  const [hotelList, setHotelList] = useState([]);

  // Get user location by IP
  const getCurrentLocation = () => {
    return fetch("https://ipinfo.io/json?token=18d1d2e8977258").then(
      (response) => response.json()
    );
  };

  // Get list of hotels in specific location
  const getHotelsInLocation = (destInfo) => {
    console.log("destInfo is: ", destInfo);
    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
      params: {
        checkout_date: "2022-10-01",
        units: "metric",
        dest_id: destInfo.destId,
        dest_type: destInfo.destType,
        locale: "en-gb",
        adults_number: 2,
        order_by: "popularity",
        filter_by_currency: "USD",
        checkin_date: "2022-09-30",
        room_number: 1,
      },
      headers: {
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        "X-RapidAPI-Key": "3e9a81d54bmsha56fd7ae542935ep14f5c5jsnc4d9aafcf35b",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result);
        setHotelList(response.data.result);
        sessionStorage.setItem(
          "hotelList",
          JSON.stringify(response.data.result)
        );
        // localStorage.setItem("saveProductList", JSON.stringify(hotelList));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    let localHotels = JSON.parse(sessionStorage.getItem("hotelList"));
    if (localHotels) {
      console.log("if");
      setHotelList(localHotels);
    } else {
      console.log("else");
      getCurrentLocation().then((currentLocation) => {
        console.log("Current city ", currentLocation.city);
        const options = {
          method: "GET",
          url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
          params: { locale: "en-gb", name: currentLocation.city },
          headers: {
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
            "X-RapidAPI-Key":
              "3e9a81d54bmsha56fd7ae542935ep14f5c5jsnc4d9aafcf35b",
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
      });
    }

    // return () => {

    // };
  }, []);

  return (
    <>
      <MyNavbar />
      <MySearchBar />
      {hotelList.map((hotel) => (
        <ProductItem key={hotel.hotel_id} hotel={hotel} />
      ))}
    </>
  );
};

export default ProductList;
