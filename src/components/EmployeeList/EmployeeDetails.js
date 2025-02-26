import React from "react";

const EmployeeDetails = ({ employeeDetails = null }) => {
  return (
    <>
      {employeeDetails ? (
        <div className="flex items-center flex-col">
          <img src={employeeDetails.image} alt={employeeDetails.firstName} />
          <h3>
            {employeeDetails.firstName} {employeeDetails.lastName}
          </h3>
        </div>
      ) : <h2>Please select any user.</h2>}
    </>
  );
};

export default EmployeeDetails;
