import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page3 = ({ rollResult }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dice Roll Result</h1>
      <p>The result of the dice roll is: {rollResult}</p>
      <button onClick={() => navigate('/')}>Re-roll</button>
    </div>
  );
};

export default Page3;
