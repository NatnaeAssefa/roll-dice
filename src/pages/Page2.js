import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page2 = ({ probabilities, setRollResult }) => {
  const navigate = useNavigate();

  const rollDice = () => {
    const random = Math.random();
    let sum = 0;
    for (let i = 0; i < probabilities.length; i++) {
      sum += probabilities[i];
      if (random < sum) {
        setRollResult(i + 1);
        break;
      }
    }
    navigate('/result');
  };

  return (
    <div>
      <h1>Roll the Dice</h1>
      <button onClick={rollDice}>Roll</button>
    </div>
  );
};

export default Page2;
