import FunctionCard from './FunctionCard';
import React, { useState, useEffect } from 'react';
import InitialInput from './InitialInput';
import OutputDisplay from './OutputDisplay';

const nextFunctionDetails = ['2', '4', '-', '5', '4'];

const AtlysParentApp = () => {
  const [initialValue, setInitialValue] = useState(2); // Starting input value
  const [results, setResults] = useState(Array(5).fill(null)); // Store results of each function

  // Default equations for each function
  const defaultEquations = ["x^2", "2x+4", "x-2", "x/2", "x^2+20"];
  const [equations, setEquations] = useState(defaultEquations);

  // Handle equation changes from user input
  const updateEquation = (index, newEquation) => {
    const updated = [...equations];
    updated[index] = newEquation;
    setEquations(updated);
  };

  // Execute the function chain when input/equation changes
  useEffect(() => {
    calculateChain();
  }, [initialValue, equations]);

  // Perform calculations across the chained functions
  const calculateChain = () => {
    try {
      let value = initialValue;
      const newResults = [];
      // Execute in fixed order: (1 → 2 → 4 → 5 → 3)
      [0, 1, 3, 4, 2].forEach((index) => {
        value = evaluateEquation(equations[index], value);
        newResults[index] = value;
      });

      setResults(newResults);
    } catch (error) {
      console.error("Invalid equation:", error);
    }
  };

  const isValidEquation = (equation) => {
    // Regex pattern to allow only numbers, x, +, -, *, /, ^, (, ), and spaces
    const validPattern = /^[0-9x+\-*/^()\s]*$/;
    return validPattern.test(equation);
  };

  const preprocessEquation = (equation) => {
    // Add explicit multiplication where necessary (e.g., 2x -> 2 * x)
    const withMultiplication = equation.replace(/(\d)(x)/g, '$1 * $2');
  
    // Replace '^' with '**' for valid exponentiation in JavaScript
    const validEquation = withMultiplication.replace(/\^/g, '**');
  
    return validEquation;
  };
  
  const evaluateEquation = (equation, x) => {
    if (!isValidEquation(equation)) {
      throw new Error('Invalid equation: Only numbers, x, +, -, *, /, ^, (, ) are allowed.');
    }

    try {
      const preprocessed = preprocessEquation(equation);
      console.log("Evaluating:", preprocessed, "with x =", x);
  
      // Use Function constructor to evaluate the preprocessed equation
      return Function('x', `return ${preprocessed}`)(x);
    } 
    catch (error) {
      console.error("Error evaluating equation:", equation, error);
      throw new Error('Invalid equation format');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <InitialInput value={initialValue} onChange={setInitialValue} />
      <div className="relative">
        <div className="grid grid-cols-3 gap-6">
          {defaultEquations.slice(0, 3).map((_, index) => (
            <div key={index} className="relative m-6 z-10">
              <FunctionCard
                index={index}
                equation={equations[index]}
                onUpdate={updateEquation}
                result={results[index]}
                nextFunction={nextFunctionDetails[index]}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 place-items-center mt-10">
          {defaultEquations.slice(3, 5).map((_, index) => (
            <div key={index + 3} className="relative z-10">
              <FunctionCard
                index={index + 3}
                equation={equations[index + 3]}
                onUpdate={updateEquation}
                result={results[index + 3]}
                nextFunction={nextFunctionDetails[index + 3]}
              />
            </div>
          ))}
        </div>

        {/* SVG Lines for Connections */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Line from Function 1 to Function 2 */}
          <line x1="12%" y1="25%" x2="49%" y2="25%" stroke="blue" stroke-width="2" />
          {/* Line from Function 2 to Function 4 */}
          <line x1="55%" y1="25%" x2="35%" y2="63%" stroke="blue" stroke-width="2" />
          {/* Line from Function 4 to Function 5 */}
          <line x1="35%" y1="75%" x2="70%" y2="75%" stroke="blue" stroke-width="2" />
          {/* Line from Function 5 to Function 3 */}
          <line x1="75%" y1="60%" x2="80%" y2="35%" stroke="blue" stroke-width="2" />
        </svg>
      </div>
      <OutputDisplay result={results[2]} /> {/* Final output from function 3 */}
    </div>
  );
};
export default AtlysParentApp;

