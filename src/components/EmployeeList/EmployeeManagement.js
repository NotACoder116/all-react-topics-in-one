import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import EmployeeDetails from './EmployeeDetails'
import EmployeeList from './EmployeeList'

const fetchEmployee = async () => {
    const response  = await axios.get('https://dummyjson.com/users');
    return response.data;
}

const EmployeeManagement = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const { data, isLoading, isError } = useQuery({
        queryKey: ['employee-list'],
        queryFn: fetchEmployee
    });
  return (
    <div className='app-container w-full'>
      <div className="w-1/5 border-x-2 overflow-y-scroll">
        <EmployeeList employeeList={data} setSelectedEmployee={setSelectedEmployee}/>
      </div>
      <div className="flex justify-center items-center items-baseline w-4/5 overflow-y-scroll">
        <EmployeeDetails employeeDetails={selectedEmployee}/>
      </div>
    </div>
  )
}

export default EmployeeManagement