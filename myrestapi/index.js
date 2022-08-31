//this will your express server
import express from "express";
import cors from "cors";
import books from "./books.js";

const app=express();
const PORT = 8080;

//configuring cors middleware
app.use(cors());

//const direct

app.get('/',(req, resp)=> {
    resp.send("Hello Techtonica. first REST API")
})

app.get('/books', (req, resp)=> {
    resp.json(books);
})



app.listen(PORT, () => console.log(`Hola at ${PORT}`));

