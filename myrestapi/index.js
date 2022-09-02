import express from "express";
import cors from "cors";
import books from "./books.js";
import path from "path";
import bodyParser from "body-parser";
//this creates my whole app
//6:determines which port you want
//Per cristina "not sure what cors is doing. its middleware that allows me to control"
//15:creating endpoint whenever somebody visits localhost8080
//17:creating an endpoint for the route '/api/books' that prints all the books; - GET request
//21: open the index.html file that is in the client folder in your path
const app = express();
const PORT = 8080;

app.use(cors());

const _dirname = path.resolve();

app.use(express.static("client"));

//this is an endpoint: something that is sendin info and need to consume info to front end
app.get("/api/books", (req, resp) => {
  resp.json(books);
});

//this is a route: sends a req for html
app.get("/", (req, resp) => {
  //resp.send("Hello Techtonica this will be my first REST API");
  resp.sendFile(path.join(_dirname, "client", "index.html"));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/book", (req, res) => {
  const book = req.body;
  // Output the book to the console for debugging
  console.log(book);
  books.push(book);
  res.send("Book is added to the database");
});

app.get("/book", (req, res) => {
  res.json("book");
});

// app.get('/book/:isbn', (req, res) => {
//   // Reading isbn from the URL
//   const isbn = req.params.isbn;

//   // Searching books for the isbn
//   for (let book of books) {
//       if (book.isbn === isbn) {
//           res.json(book);
//           return;
//       }
//   }

//   // Sending 404 when not found something is a good practice
//   res.status(404).send('Book not found');
// });

// app.delete('/book/:isbn', (req, res) => {
//   // Reading isbn from the URL
//   const isbn = req.params.isbn;

//   // Remove item from the books array
//   books = books.filter(i => {
//       if (i.isbn !== isbn) {
//           return true;
//       }
//       return false;
//   });

//   res.send('Book is deleted');
// });

// app.post('/book/:isbn', (req, res) => {
//   // Reading isbn from the URL
//   const isbn = req.params.isbn;
//   const newBook = req.body;

//   // Remove item from the books array
//   for (let i = 0; i < books.length; i++) {
//       let book = books[i]
//       if (book.isbn === isbn) {
//           books[i] = newBook;
//       }
//   }

//   res.send('Book is edited');
// });


app.listen(PORT, () => console.log(`HOLA! Server running at ${PORT}`));