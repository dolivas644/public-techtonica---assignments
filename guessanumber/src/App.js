import "./app.css";

import UserGuess from "./components/UuerGuess";

export default function App() {
  return (
    <div className="App">
      <h1>Guess A Number from 1-100</h1>
      <UserGuess />
    </div>
  );
}
