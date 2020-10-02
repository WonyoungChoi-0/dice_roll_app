import React, {useState} from 'react';
import './App.css';

function App(){

  const [diceImage, roll] = useState(null);
  const [diceNum, rollNum] = useState(null)

  return (
    <div style={{ textAlign: "center"}}>
      <img src={diceImage} style={{ width: "25%" }}></img> <br></br>
      <h4>{diceNum}</h4>
      <button onClick={ () => {
          let rand = Math.floor(Math.random() * (7 - 1) + 1);
          switch(rand){
            case 1:
              roll("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png");
              rollNum("You rolled a " + rand + "!");
              break;
            case 2: 
              roll("https://www.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png");
              rollNum("You rolled a " + rand + "!");
              break;
            case 3: 
              roll("https://www.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png");
              rollNum("You rolled a " + rand + "!");
              break;
            case 4:
              roll("https://www.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png");
              rollNum("You rolled a " + rand + "!");
              break;
            case 5:
              roll("https://www.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png");
              rollNum("You rolled a " + rand + "!");
              break;
            default:
              roll("https://www.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png");
              rollNum("You rolled a " + rand + "!");
          }
        }
      }>Roll Dice
      </button> <br/>
    </div>
  );
}


export default App;
