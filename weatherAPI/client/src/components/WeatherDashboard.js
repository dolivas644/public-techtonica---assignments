import '../App.css';
import {useState} from "react";


const WeatherDashboard = () => {
  //get useSate for zip that is taken into account
  const [zip, setZip] = useState(null);
  //useState for the data needed for display
  const [result, setResult] = useState({
    main: {temp: 0, feels_like: 0},
    wind: {speed: 0},
    clouds: {all: 0},
 
  });

  console.log('result ', result);

  // part 3 when subnit is clicked
  const handleSubmit=(e) =>{
    e.preventDefault();
    fetch(`http://localhost:5001/weather`)
    .then(res => res.json())
    .then(data => setResult(data))
console.log(setResult);
// const params = new URLSearchParams({ zipName: zip});
// fetch(`/weather?${params}`)
//   .then((res) => res.json())
//   .then((data) => setResult(data));
    setZip("");
    
};

// //city country , temp, 
// // "main": {
// //     "temp": 304,
// //     "feels_like": 304.63,

// // "wind": {
// //     "speed": 5.66,
// // },
// // "clouds": {
// //     "all": 75

  // part 2
  return (
    <div className="App">
      <div className="weather">
    <h1 class= "w3-card-4 w3-blue">Diana's Weather Forecast</h1>
    <form onSubmit={handleSubmit}>
<input id="zipName" type="numbers" placeholder="Please enter your zip name" name="zip" onChange={(e) => setZip(e.target.value)} value={zip} required />
<input id="submitBTN" type="submit" value="Submit" onClick={handleSubmit} />
    </form>
      </div>
      <div className="result">
  
        <div class ="w3-row w3-white">
        <div class="w3-cointainer w3-quarter w3-center">
        <p>Temperature:{" "} {result.main.temp} {"F"}</p>
        <i class='fas fa-sun' ></i>
        </div>
        <div class="w3-cointainer w3-quarter w3-center ">
        <p>Feels like:{" "} {result.main.feels_like}</p>
        <i class ='fas fa-temperature-high'></i>
        </div>
        <div class=" w3-cointainer w3-quarter w3-center ">
        <p>Wind Speed:{" "} {result.wind.speed}</p>
        <i class='fas fa-wind' ></i>
        </div>
        <div class="w3-cointainer w3-quarter w3-center ">
        <p>Clouds:{" "} {result.clouds.all}</p>
        <i class='fas fa-cloud-sun'></i>
        </div>
      </div>
      </div>
  </div>

  );
};

export default WeatherDashboard;
