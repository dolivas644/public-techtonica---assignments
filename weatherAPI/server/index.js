// server/index.js
import cors from 'cors';
import express from "express";
import fetch from "node-fetch";

import { config } from "dotenv";
config();

console.log(`Your api key is ${process.env.API_KEY}`);

const app = express();

// //Set the port that you want the server to run on
const PORT = 5001;
app.use(cors());



// //ROUTE FOR THE INDEX
app.get('/', (req, res) =>{
    res.json(data);
})

let URL = `https://api.openweathermap.org/data/2.5/weather?zip=90012,&APPID=${process.env.API_KEY}`;
// // let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`;

app.get('/weather', (req, res) => { 
    fetch(URL) 
    .then((response) => response.json()) 
    .then((data) => { res.send(data); 
    }); 
})



// const PORT = process.env.PORT || 5000;

// app.get("/weather", (req, res) => {
//   const zip= req.query.zipName;
//   const apiKey = process.env.API_KEY;
//   const params = new URLSearchParams({
//     q: req.query.cityName,
//     appid: process.env.API_KEY,
//     units: "imperial",
//   });
//   const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
//   console.log(url);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       res.send({ data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
app.listen(PORT, () => console.log(`This a live test! Server running on Port http://localhost: ${PORT}`)); 
