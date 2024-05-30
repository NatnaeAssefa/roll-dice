import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = ({ setProbabilities }) => {
  const [option, setOption] = useState(null);
  const [customProbabilities, setCustomProbabilities] = useState([0, 0, 0, 0, 0, 0]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCustomProbChange = (index, value) => {
    const newProbs = [...customProbabilities];
    newProbs[index] = parseFloat(value);
    setCustomProbabilities(newProbs);
  };

  const handleConfirm = () => {
    const sum = customProbabilities.reduce((a, b) => a + b, 0);
    if (sum !== 1) {
      setError('The probabilities must sum to 1');
      return;
    }
    setProbabilities(customProbabilities);
    navigate('/roll');
  };

  const handleOptionSelect = (option) => {
    setOption(option);
    if (option === 'even') {
      setProbabilities(Array(6).fill(1/6));
      navigate('/roll');
    }
  };

  return (
    <div>
      <h1>Select Dice Probability</h1>
      <button onClick={() => handleOptionSelect('even')}>Even Probability</button>
      <button onClick={() => handleOptionSelect('custom')}>Uneven Probability</button>
      
      {option === 'custom' && (
        <div>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>
              <label>
                Side {i + 1} Probability:
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={customProbabilities[i]}
                  onChange={(e) => handleCustomProbChange(i, e.target.value)}
                />
              </label>
            </div>
          ))}
          <button onClick={handleConfirm}>Confirm</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Page1;
