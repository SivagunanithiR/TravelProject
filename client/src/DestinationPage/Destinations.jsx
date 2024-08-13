import React, { useState, useEffect } from "react";
import "./Destinations.css"; // Adjust the import path if needed

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import Portfolio from "../Portfolio/Portfolio";
import Review from "../Review/Review";
import Question from "../Question/Question";
import axios from "axios";

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [selectedHighlight, setSelectedHighlight] = useState("All");

  useEffect(() => {
    searchDestinations();
  }, [selectedHighlight]);

  const searchDestinations = () => {
    axios
      .get("http://localhost:3000/destinations")
      .then((res) => {
        const allDestinations = res.data;
        // console.log(allDestinations);
        const filtered = allDestinations.filter((destination) =>
          destination.location.toLowerCase().includes(search.toLowerCase())
        );

        setDestinations(filtered);
        setFilteredDestinations(
          selectedHighlight === "All"
            ? filtered
            : filtered.filter((destination) =>
                destination.highlight
                  .toLowerCase()
                  .includes(selectedHighlight.toLowerCase())
              )
        );
      })
      .catch((err) => console.log(err));
  };

  const handleFilterClick = (highlight) => {
    setSelectedHighlight(highlight);
  };

  return (
    <div className="destination">
      <div className="secContainer">
        <div className="headerText">
          <span className="redText">EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour
          </p>
        </div>
        <div className="searchField">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input
              type="text"
              placeholder="Location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") searchDestinations();
              }}
            />
          </div>
          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>
          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <button className="btn flex" onClick={searchDestinations}>
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>
        <div className="secMenu">
          <ul className="flex">
            <li
              className={selectedHighlight === "All" ? "active" : ""}
              onClick={() => handleFilterClick("All")}
            >
              All
            </li>
            <li
              className={selectedHighlight === "Recommended" ? "active" : ""}
              onClick={() => handleFilterClick("Recommended")}
            >
              Recommended
            </li>
            <li
              className={selectedHighlight === "Beach" ? "active" : ""}
              onClick={() => handleFilterClick("Beach")}
            >
              Beach
            </li>
            <li
              className={selectedHighlight === "Park" ? "active" : ""}
              onClick={() => handleFilterClick("Park")}
            >
              Park
            </li>
            <li
              className={selectedHighlight === "Nature" ? "active" : ""}
              onClick={() => handleFilterClick("Nature")}
            >
              Nature
            </li>
            <li
              className={selectedHighlight === "Mountain" ? "active" : ""}
              onClick={() => handleFilterClick("Mountain")}
            >
              Mountain
            </li>
          </ul>
        </div>
        <div className="destinationContainer grid">
          {filteredDestinations.map((destination) => (
            <div className="singleDestination" key={destination["_id"]}>
              <div className="imgDiv">
                <img src={destination["image"]} alt={destination["places"]} />
                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">{destination["places"]}</span>
                    <p className="flex">
                      <TiLocation className="icon" />
                      {destination.location}
                    </p>
                  </div>
                  <span className="rating">{destination.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Portfolio />
      <Review />
      <Question />
    </div>
  );
};

export default Destinations;
