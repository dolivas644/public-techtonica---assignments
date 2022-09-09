import '../App.css';
import {useState} from "react";


const WeatherDashboard = () => {
  const [zip, setZip] = useState(null);
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
    <h1 className= "weatherHeader">Diana's Weather Forecast</h1>
    <form onSubmit={handleSubmit}>
<input id="zipName" type="numbers" placeholder="Please enter your zip name" name="zip" onChange={(e) => setZip(e.target.value)} value={zip} required />
<input id="submitBTN" type="submit" value="Submit" onClick={handleSubmit} />
    </form>
      </div>
      <div className="result">
        <p>Temperature:{" "} {result.main.temp}</p>
        <p>Feels like:{" "} {result.main.feels_like}</p>
        <p>Wind Speed:{" "} {result.wind.speed}</p>
        <p>Clouds:{" "} {result.clouds.all}</p>
      </div>
  </div>

  );
};

export default WeatherDashboard;
