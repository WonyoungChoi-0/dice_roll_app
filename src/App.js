import React, {useState} from 'react';
import './App.css';
import side1 from "./images/side1.png";
import side2 from "./images/side2.png";
import side3 from "./images/side3.png";
import side4 from "./images/side4.png";
import side5 from "./images/side5.png";
import side6 from "./images/side6.png";

function App(){

  const [num, roll] = useState(null);
  let images = [side1, side2, side3, side4, side5, side6];


  const rollDice = () => {
    let rand = Math.floor(Math.random() * 6 + 1);
    roll(rand);
  }

  return (
    <div style={{ textAlign: "center"}}>
      <br></br>
      <img src={images[num - 1]} style={{ width: "25%", height: "25%" }}></img> <br></br>
      {num && <h4>You rolled a {num}</h4>}
      <button onClick={rollDice}>Roll Dice</button> <br/>
    </div>
  );
}


export default App;
