import React, { useEffect, useState } from "react";
import "../styles/ProductItem.css";
import axios from "axios";
import logo from "../assets/test.jpg";

const ProductItem = () => {
  const [hotelList, setHotelList] = useState([]);

  // Get user location by IP
  const getCurrentLocation = () => {
    return fetch("https://ipinfo.io/json?token=18d1d2e8977258").then(
      (response) => response.json()
    );
  };

  // Get list of hotels in specific location
  const getHotelsInLocation = (destInfo) => {
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
        "X-RapidAPI-Key": "abe14f8690msh4951ba020fe401ap16f079jsn85bcb63f2398",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result);
        setHotelList(response.data.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getCurrentLocation().then((currentLocation) => {
      console.log("Current city ", currentLocation.city);
      const options = {
        method: "GET",
        url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
        params: { locale: "en-gb", name: currentLocation.city },
        headers: {
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
          "X-RapidAPI-Key":
            "abe14f8690msh4951ba020fe401ap16f079jsn85bcb63f2398",
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
  }, []);

  // Render component
  return (
    <>
      {hotelList.map((hotel) => (
        <div className="outter-container" key={hotel.hotel_id}>
          <div className="inner-container">
            <img
              src={hotel.max_photo_url}
              className="productImage"
              width="200"
              height="200"
            />
            <div className="product-info">
              <h1>{hotel.hotel_name}</h1>
              <div className="rating_container">
                {hotel.review_score ? (
                  <>
                    <span className="ratings_word">
                      {hotel.review_score_word}
                    </span>
                    <span className="ratings">{hotel.review_score}</span>
                  </>
                ) : (
                  <>
                    <span className="new_merch">New to Looking.com</span>
                  </>
                )}
              </div>
              <h4>
                {hotel.address +
                  ", " +
                  hotel.city_name_en +
                  ", " +
                  hotel.country_trans}
                <span>‎&nbsp; ({hotel.distances[0].text})‬</span>
              </h4>

              <div className="room-types">
                <span
                  dangerouslySetInnerHTML={{
                    __html: hotel.unit_configuration_label,
                  }}
                ></span>
              </div>
              <div className="price_container">
                <span className="room_price">
                  Starts from: &nbsp;
                  <b>
                    {hotel.composite_price_breakdown.all_inclusive_amount.value}{" "}
                    &nbsp;{" "}
                    {
                      hotel.composite_price_breakdown.all_inclusive_amount
                        .currency
                    }
                  </b>
                </span>
              </div>
              <span style={{ marginLeft: 20 }}>
                &nbsp; &nbsp; &nbsp; Check on map ?
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
