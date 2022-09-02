//this will your express server
import express from "express";
import cors from "cors";
import books from "./books.js";
import path from 'path';

const app=express();
const PORT = 8080;

//configuring cors middleware
app.use(cors());


// Configuring express-prettify middleware for working with JSON
app.use(pretty({ query: 'pretty' }));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// to render static files from the client folder
app.use(express.static('client'));

//const direct
const __dirname= path.resolve();

app.get('/books', (req, resp)=> {
    resp.json(books);
})


app.get('/',(req, resp)=> {
    //open index.html (creates route)
    resp.sendFile(path.join(__dirname, 'client', 'index.html'));
});



app.listen(PORT, () => console.log(`Hola at ${PORT}`));

