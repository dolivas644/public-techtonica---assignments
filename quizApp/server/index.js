import express from "express";
import cors from "cors";
import fetch from "node-fetch";

//set config
import { config } from "dotenv";
config();

//set express & port
const app = express();
const PORT = 8080;

//set cors
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route for index
app.get('/', (req,res) =>{
    res.json("Page is running");
})

//api
let URL = `${process.env.API_HOST}`;

//fetch data
app.get('/quiz', (req, res) =>{
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        res.send(data);
    })
})

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
