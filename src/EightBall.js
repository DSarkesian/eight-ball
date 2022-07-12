import React, { useState } from "react";
import { getRandom, eightBallAnswers } from "./helpers";


function EightBall({ answers = eightBallAnswers }) {
  const [answer, setAnswer] = useState("Think of a question");
  const [color, setColor] = useState("black");
  const myStyles = {
    color: color
  };
  function handleClick() {
    let idx = getRandom(eightBallAnswers.length);
    const { msg, color } = (eightBallAnswers[idx]);
    setColor(color);
    setAnswer(msg);
  }

  return (
    <div className='ball' style={myStyles} onClick={handleClick}>
      <p>{answer}</p>
    </div>
  );

}

export default EightBall;
