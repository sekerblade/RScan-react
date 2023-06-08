/* eslint-disable prettier/prettier */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    getEmployees()
  }, [])

  const getEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/employees')
      setEmployeeList(response.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  return (
    <div>
      {/* Render your employee list */}
      {employeeList.map((employee) => (
        <div key={employee.ID}>
          <h2>{employee.Name}</h2>
        </div>
      ))}
    </div>
  )
}

export default EmployeeList
