import React from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              
              placeholder="Enter a city"
              className="form control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className=" btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Paris</h1>
      <ul>
        <li>Wednesday</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row ">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/clear_night_light.svg"
              alt="Mostly cloudy"
              className="float-left"
            />

            <span className="temperature">12</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humoduty:72%</li>
            <li>Wind:12% km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
