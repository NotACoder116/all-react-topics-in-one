import React, { useState } from 'react';
import EquationDropdown from './EquationDropdown';

const FunctionCard = ({ index, equation, onUpdate, result, nextFunction }) => {
  const [input, setInput] = useState(equation);
  const [error, setError] = useState('');

  const isValidEquation = (equation) => {
    // Regex pattern to allow only numbers, x, +, -, *, /, ^, (, ), and spaces
    const validPattern = /^[0-9x+\-*/^\s]*$/;
    return validPattern.test(equation);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (isValidEquation(value)) {
      setError(''); // Clear the error if input becomes valid
      setInput(value);
      onUpdate(index, value); // Notify the parent component of the update
    } else {
      setError('Invalid input! Only numbers, x, +, -, *, /, ^, (, ) are allowed.');
    }
  };

  return (
    <div className="bg-white shadow-md p-5 rounded-lg">
      <h2 className="font-bold">Function {index + 1}</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="border p-2 w-full mt-2 rounded"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>} {/* Error message */}
      <EquationDropdown nextFunction={nextFunction}/>
      <div className="text-gray-600 mt-2">Result: {result}</div>
    </div>
  );
};

export default FunctionCard;
