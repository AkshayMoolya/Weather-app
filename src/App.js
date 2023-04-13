import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  const [location, setlocation] = useState("");
  const Apikey = "02f9f2fc046e00d5f68ce94bcace4d32";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Apikey}&units=metric`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
        console.log(data);
      });
      setlocation("");
    }
  };
  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setlocation(event.target.value)}
          onKeyDown={searchLocation}
          type="text"
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="Top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="Temp">
            {data.main ? <h1>{data.main.temp}°c</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.main!== undefined &&
          <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}°c</p> : null}
            <p>Feels_like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
            <p>wind speed</p>
          </div>
        </div>
        }
        
      </div>
    </div>
  );
}

export default App;
