import React, { useState } from "react";
import { getRandom, eightBallAnswers } from "./helpers";
import "./EightBall.css";

/** EightBall that displays answer to a question when clicked.
 *
 *  Props:
 *  - answers
 *
 *  State:
 *  - answer: string of answer
 *  - color: string of color name
 *
 *  App -> EightBall
 */

function EightBall({ answers = eightBallAnswers }) {
  const [answer, setAnswer] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const myStyles = {
    backgroundColor: color,
  };

  function handleClick() {
    const idx = getRandom(answers.length);
    const { msg, color } = answers[idx];
    setColor(color);
    setAnswer(msg);
  }

  return (
    <div className='EightBall-ball' style={myStyles} onClick={handleClick}>
      <p>{answer}</p>
    </div>
  );
}

export default EightBall;
