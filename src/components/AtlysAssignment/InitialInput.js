import React from "react";

const InitialInput = ({ value, onChange }) => {
    const handleInput = (e) => {
        onChange(Number(e.target.value) || "")
    }
  
    return <div className="mb-6">
      <label className="block text-lg font-semibold">Initial Value of x:</label>
      <input
        type="number"
        value={value}
        onChange={handleInput}
        className="border p-2 mt-2 w-full"
      />
    </div>
};

export default InitialInput;
