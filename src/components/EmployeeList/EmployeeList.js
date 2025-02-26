import React from "react";

const EmployeeList = ({ employeeList, setSelectedEmployee }) => {

  return (
    <div>
      {employeeList &&
        employeeList.users.map((employee) => {
          return (
            <div
              onClick={() => setSelectedEmployee(employee)}
              key={employee.id}
              className="flex justify-between align-center m-2 border border-gray-300 p-2 rounded-md {employee.firstName} {employee.lastName}"
            >
              <p>
                {employee.firstName} {employee.lastName}
              </p>
              <span>X</span>
            </div>
          );
        })}
    </div>
  );
};

export default EmployeeList;
