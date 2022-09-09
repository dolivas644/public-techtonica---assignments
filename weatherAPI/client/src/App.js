import './App.css';
import './components/weather';
import {useState} from 'react';

function App() {

  const [zip, setZip] = useState(null);
  const [result, setResult] = useState("");

  const handleSubmit=(e) =>{
    e.preventDefault();
    fetch(`http://localhost:5000/weather`)
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
}

export default App;
