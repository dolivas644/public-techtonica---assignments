import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'

const app = express();
const PORT = 4040;

app.use(cors());
app.use(bodyParser.json())


// app.use("/users", usersRouter);
// app.use("/events", eventsRouter);


  // server/routes/users.mjs`
app.get('/', function (req, res,) {
    res.json("Get request working");
  });

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));