import React, { useState } from "react";

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

let list = [];
export default function UserGuess() {
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState("");
  const [guessArray, setguessArray] = useState("");
  const [count, setCount] = useState(0);

  const onClick = () => {
    console.log(guess);
    const userGuess = parseInt(guess, setGuess);

    setAnswer(<p>Please input a number between 1-100</p>);

    if (userGuess === randomNumber) {
      setAnswer(<p>Great job! That is the correct answer!</p>);
    } else if (userGuess > randomNumber) {
      setAnswer(<p>Too high, guess lower</p>);
    } else if (userGuess < randomNumber) {
      setAnswer(<p>Too low, guess higher</p>);
    }
    setCount((count) => count + 1);
  };

  return (
    <>
      <input
        value={guess}
        type="number"
        onChange={(e) => setGuess(e.target.value)}
      />
      <button type="submit" onClick={onClick}>
        GUESS
      </button>
      <br />
      <br />
      {answer}
      <br />
      <br />
      {count}
    </>
  );
}
